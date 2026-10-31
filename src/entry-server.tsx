
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import type { HelmetServerState } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  const helmet: HelmetServerState | null = null;

  return { html, helmet };
}
