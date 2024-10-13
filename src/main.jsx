import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import LanguageContextProvider from './context/LanguageContext.jsx'
import ProductContextProvider from './context/ProductContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<LanguageContextProvider>
			<ProductContextProvider>
				<App />
				<ToastContainer />
			</ProductContextProvider>
		</LanguageContextProvider>
	</StrictMode>
)
