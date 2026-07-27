import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Fontes self-hosted: sem requisição a terceiros e sem depender do que está
// instalado no dispositivo (o CSS anterior declarava Sora/Inter sem carregá-las).
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';

import './styles/tokens.css';
import './styles/base.css';
import './styles/print.css';

// Marca que o JS está ativo. Sem esta classe nada é escondido para animar —
// conteúdo de segurança precisa aparecer mesmo se o bundle falhar.
document.documentElement.classList.add('js');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
