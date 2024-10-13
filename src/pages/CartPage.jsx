import React, { useContext } from 'react'
import CartCode from '../components/Cart/CartCode'
import CartEmpty from '../components/Cart/CartEmpty'
import CartItem from '../components/Cart/CartItem'
import CartTitle from '../components/Cart/CartTitle'
import { ProductContext } from '../context/ProductContext'
const CartPage = () => {
	const { cart } = useContext(ProductContext)

	return (
		<div className='container'>
			<div className='top'>
				<div className='container'>
					<CartTitle />
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
