import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18next from './i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </I18nextProvider> 
);
