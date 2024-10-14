import React, { useEffect } from 'react'
import Products from '../components/Products/Products'

const SousePage = () => {
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

export default SousePage