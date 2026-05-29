import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_MODEL_ID, MODELS } from './data/models';
import { Sidebar } from './components/Sidebar';
import { ModelViewer } from './components/ModelViewer';
import { InfoPanel } from './components/InfoPanel';
import { getLoadEntry, loadModel, preloadModel } from './lib/modelLoader';
import './app.css';

function App() {
  const [activeId, setActiveId] = useState<string>(DEFAULT_MODEL_ID);
  const activeModel = useMemo(
    () => MODELS.find((m) => m.id === activeId) ?? MODELS[0],
    [activeId]
  );

  // 启动加载编排：
  //   1. 立刻启动默认模型的下载（也由 ModelViewer 内的 useModel 触发，这里做兜底）；
  //   2. 等默认模型解析完成（或 5s 超时）后，按顺序串行预加载其它模型，
  //      避免多个 ~10MB 文件同时下载抢占带宽。
  useEffect(() => {
    let cancelled = false;

    const firstEntry = loadModel(activeModel.modelUrl, {
      fileSize: activeModel.fileSize,
    });

    let started = false;
    const queueOthers = () => {
      if (cancelled || started) return;
      started = true;
      const queue = MODELS.filter((m) => m.id !== activeModel.id);
      let i = 0;
      const next = () => {
        if (cancelled || i >= queue.length) return;
        const m = queue[i++];
        preloadModel(m.modelUrl, { fileSize: m.fileSize });
        const entry = getLoadEntry(m.modelUrl);
        entry?.promise.finally(() => {
          if (cancelled) return;
          setTimeout(next, 120);
        });
      };
      next();
    };

    const timer = setTimeout(queueOthers, 5000);
    firstEntry.promise
      .then(() => {
        clearTimeout(timer);
        queueOthers();
      })
      .catch(() => {
        clearTimeout(timer);
        queueOthers();
      });

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // 仅在挂载时触发，用户后续切换模型不会重启队列
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-shell">
      {/* 3D Background Stage */}
      <section
        className="stage"
        style={{ '--accent': activeModel.accent } as React.CSSProperties}
      >
        <ModelViewer key={activeModel.id} model={activeModel} />
      </section>

      {/* Foreground UI Overlay */}
      <div className="app-ui">
        <header className="topbar">
        <div className="brand">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Agrupamento de Escolas Josefa de Óbidos"
            className="brand-logo"
          />
          <div>
            <h1 className="brand-title">Estúdio de Arquitetura Celular</h1>
            <p className="brand-tagline">
              <span className="brand-pen">Explorar a beleza da vida ao microscópio</span>
              <span className="brand-sep">·</span>
            </p>
          </div>
        </div>
        <div className="topbar-meta">
          <span className="meta-pill">Versão v1.0</span>
          <span className="meta-text">Agrupamento de Escolas Josefa de Óbidos</span>
        </div>
      </header>

      <main className="layout">
        <Sidebar models={MODELS} activeId={activeId} onSelect={setActiveId} />

        <div className="layout-center-empty" />

        <InfoPanel model={activeModel} />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Estúdio de Arquitetura Celular - Agrupamento de Escolas Josefa de Óbidos </span>
      </footer>
      </div>
    </div>
  );
}

export default App;
