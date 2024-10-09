import React from 'react'
import HeroBottom from '../components/hero/HeroBottom'
import HeroTop from '../components/hero/HeroTop'
import Products from '../components/Products/Products'

const HomePage = () => {
	return (
		<div className='container'>
			<HeroTop />
			<HeroBottom />
			<Products />
		</div>
	)
}

export default HomePage
