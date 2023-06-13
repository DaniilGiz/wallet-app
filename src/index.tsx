import { createElement } from 'react';
import './index.sass';
import { App } from './Components/App';
import { createRoot } from 'react-dom/client';


(() => {
  const body = document.body;
  if (body) {
    const container = document.getElementById("root");
    if (container != null) {
      const root = createRoot(container);
      root.render(createElement(App));
    }
  }
})();
