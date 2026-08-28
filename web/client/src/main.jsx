import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LevelEditor from './level/LevelEditor.jsx';
import './styles.css';

// Two pages, no router: the registry browser at / and the level editor at
// /level[/<id>]. Vite's SPA mode and the server's terminal fallback both hand
// index.html to either path.
const path = window.location.pathname;
const isLevel = path === '/level' || path.startsWith('/level/');
const initialId = isLevel ? path.split('/')[2] || null : null;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isLevel ? <LevelEditor initialId={initialId} /> : <App />}
  </StrictMode>,
);
