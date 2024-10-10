import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
		<ToastContainer />
	</StrictMode>
)
