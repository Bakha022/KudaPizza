import React, { useContext, useEffect } from 'react'
import CartCode from '../components/Cart/CartCode'
import CartEmpty from '../components/Cart/CartEmpty'
import CartItem from '../components/Cart/CartItem'
import CartTitle from '../components/Cart/CartTitle'
import { LanguageContext } from '../context/LanguageContext'
import { ProductContext } from '../context/ProductContext'
const CartPage = () => {
	const { cart } = useContext(ProductContext)
	const { lang } = useContext(LanguageContext)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='container'>
			<div className='top'>
				<CartTitle title={lang.yourOrder} arr={cart} />
				<div className='container'>
					<>
						{cart.length ? (
							cart?.map((item, index) => <CartItem key={index} {...item} />)
						) : (
							<CartEmpty />
						)}
					</>
					<CartCode />
				</div>
			</div>
		</div>
	)
}

export default CartPage
