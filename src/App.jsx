import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
