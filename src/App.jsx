import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CartPage from './pages/CartPage'
import DesertsPage from './pages/DeserstsPage'
import DrinksPage from './pages/DrinksPage'
import HaertPage from './pages/HeartPage'
import HomePage from './pages/HomePage'
import KomboPage from './pages/KomboPage'
import PizzaPage from './pages/PizzaPage'
import SnacksPage from './pages/SnacksPage'
import SousePage from './pages/SousePage'
import SushiPage from './pages/SushiPage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/heart' element={<HaertPage />} />

					<Route path='/pizza' element={<PizzaPage />} />
					<Route path='/sushi' element={<SushiPage />} />
					<Route path='/drinks' element={<DrinksPage />} />
					<Route path='/snacks' element={<SnacksPage />} />
					<Route path='/kombo' element={<KomboPage />} />
					<Route path='/deserts' element={<DesertsPage />} />
					<Route path='/sauces' element={<SousePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
