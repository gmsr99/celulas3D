import type { LoadStatus } from '../lib/modelLoader';

interface Props {
  progress: number;
  status: LoadStatus;
  modelName: string;
  error?: unknown;
}

const STATUS_TEXT: Record<LoadStatus, string> = {
  idle: 'A preparar…',
  downloading: 'A descarregar o modelo…',
  parsing: 'A processar a geometria…',
  done: 'Carregamento concluído',
  error: 'Erro no carregamento',
};

export function ProgressOverlay({ progress, status, modelName, error }: Props) {
  const percent = Math.round(progress * 100);
  return (
    <div className="progress-overlay" role="status" aria-live="polite">
      <div className="progress-card">
        <div className="progress-spinner" aria-hidden="true">
          <CellRing />
        </div>
        <div className="progress-headline">
          A preparar <strong>{modelName}</strong>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${Math.max(2, percent)}%` }}
          />
        </div>
        <div className="progress-status">
          <span className="progress-percent">{percent}%</span>
          <span className="progress-text">{STATUS_TEXT[status]}</span>
        </div>
        {status === 'error' && (
          <div className="progress-error">
            {(error as Error | undefined)?.message ?? 'Por favor, recarregue a página e tente novamente.'}
          </div>
        )}
      </div>
    </div>
  );
}

function CellRing() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80">
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9bcf83" />
          <stop offset="100%" stopColor="#5c7a8a" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="32" stroke="rgba(0,0,0,0.06)" strokeWidth="6" fill="none" />
      <circle
        cx="40"
        cy="40"
        r="32"
        stroke="url(#ring)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="200"
        strokeDashoffset="60"
        transform="rotate(-90 40 40)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="-90 40 40"
          to="270 40 40"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="40" cy="40" r="9" fill="#5c2a8c" opacity="0.7" />
      <circle cx="28" cy="32" r="2.5" fill="#f1c40f" />
      <circle cx="52" cy="30" r="2" fill="#e67e22" />
      <circle cx="52" cy="50" r="2.4" fill="#1e88e5" />
      <circle cx="28" cy="52" r="2.2" fill="#c0392b" />
    </svg>
  );
}
