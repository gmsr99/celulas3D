import type { CellModel } from '../data/models';

interface Props {
  model: CellModel;
}

export function InfoPanel({ model }: Props) {
  return (
    <aside className="info-panel" style={{ '--accent': model.accent } as React.CSSProperties}>
      <section className="info-card hero-card">
        <header>
          <span className="card-eyebrow">Foco da Aula</span>
          <h2>{model.name}</h2>
          <p className="info-tagline">{model.subtitle}</p>
        </header>
        <dl className="info-grid">
          <div>
            <dt>Categoria</dt>
            <dd>{model.category}</dd>
          </div>
          <div>
            <dt>Dimensão</dt>
            <dd>{model.size}</dd>
          </div>
          <div>
            <dt>Localização</dt>
            <dd>{model.location}</dd>
          </div>
          <div>
            <dt>Visível ao M.O.</dt>
            <dd>
              <span className={`pill ${model.visibleInLM.startsWith('Sim') ? 'on' : 'off'}`}>
                {model.visibleInLM}
              </span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">Descrição</span>
        <p className="info-description">{model.description}</p>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">Estruturas-Chave</span>
        <ul className="feature-list">
          {model.features.map((f) => (
            <li key={f.name}>
              <span className="feature-dot" />
              <div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-detail">{f.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="info-card fun-card">
        <span className="card-eyebrow">Sabia que...?</span>
        <p className="fun-text">{model.funFact}</p>
      </section>

      <section className="info-card occur-card">
        <span className="card-eyebrow">Distribuição e Habitat</span>
        <p>{model.whereItOccurs.text}</p>
        <div className="habitat">{model.whereItOccurs.habitat}</div>
      </section>
    </aside>
  );
}
