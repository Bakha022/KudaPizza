import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { ProductContext } from '../../context/ProductContext'
import style from './Cart.module.css'
const CartTitle = () => {
	const { lang } = useContext(LanguageContext)
	const { cart } = useContext(ProductContext)
	return (
		<div className={style['cart-title']}>
			{lang.yourOrder} ({cart.length})
		</div>
	)
}

export default CartTitle
