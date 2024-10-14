import React, { useEffect } from 'react'
import HeroBottom from '../components/hero/HeroBottom'
import HeroTop from '../components/hero/HeroTop'
import Products from '../components/Products/Products'
import HomeText from '../components/HomeText/HomeText'

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='container'>
			<HeroTop />
			<HeroBottom />
			<Products />
			<HomeText/>
		</div>
	)
}

export default HomePage
