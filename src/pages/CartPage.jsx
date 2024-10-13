import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
const CartPage = () => {
	const { cart } = useContext(ProductContext)
	console.log(cart)

	return (
		<div className='container'>
			<div className='top'>
				<div className='container'>
					<div className='cart-title'>Ваш заказ</div>
					<div className="row-cols">
							
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartPage
