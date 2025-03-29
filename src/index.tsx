import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import Router from './router';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
    <BrowserRouter>
        <StrictMode>
            <App />
            <Router />
        </StrictMode>
    </BrowserRouter>
);
