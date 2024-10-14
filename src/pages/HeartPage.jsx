import React, { useContext, useEffect } from 'react'

import CartEmpty from '../components/Cart/CartEmpty'
import CartTitle from '../components/Cart/CartTitle'
import ProductCards from '../components/Products/ProductCards'
import { LanguageContext } from '../context/LanguageContext'
import { ProductContext } from '../context/ProductContext'
const HeartPage = () => {
	const { like } = useContext(ProductContext)
	const { lang } = useContext(LanguageContext)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className='top'>
			<div className='container'>
				<CartTitle title={lang.yourLikedProducts} arr={like} />
				<div className='row'>
					{like.length ? (
						like.map(item => <ProductCards {...item} key={item.id} />)
					) : (
						<CartEmpty />
					)}
				</div>
			</div>
		</div>
	)
}

export default HeartPage
