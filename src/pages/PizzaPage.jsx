import React, { useEffect } from 'react'
import Products from '../components/Products/Products'

const PizzaPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='top'>
			<div className='container'>
				<Products />
			</div>
		</div>
	)
}

export default PizzaPage
