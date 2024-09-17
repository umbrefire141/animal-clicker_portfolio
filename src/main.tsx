import '@/assets/styles/fonts.css';
import '@/assets/styles/globals.css';
import '@/assets/styles/reset.css';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import BackButtonTelegram from './components/shared/BackButtonTelegram/BackButtonTelegram.tsx';
import CheckUserIsInstructioned from './components/shared/CheckUserIsInstructioned.tsx';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WebAppProvider options={{ smoothButtonsTransition: true }}>
			<Provider store={store}>
				<BrowserRouter>
					<BackButtonTelegram />
					<CheckUserIsInstructioned>
						<App />
					</CheckUserIsInstructioned>
				</BrowserRouter>
			</Provider>
		</WebAppProvider>
	</React.StrictMode>
);
