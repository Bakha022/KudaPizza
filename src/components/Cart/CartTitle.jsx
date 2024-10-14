import React from 'react'

import style from './Cart.module.css'
const CartTitle = ({ title, arr }) => {
	return (
		<div className={style['cart-title']}>
			{title} ({arr.length})
		</div>
	)
}

export default CartTitle
