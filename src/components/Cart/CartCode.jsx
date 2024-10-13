import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { ProductContext } from '../../context/ProductContext'
import style from './Cart.module.css'

const CartCode = () => {
	const { lang } = useContext(LanguageContext)
	const { cart } = useContext(ProductContext)
	const totalSum = cart.reduce((acc, pr) => acc + pr.price * pr.quantity, 0)

	return (
		<div className={style['code']}>
			<div className={style['code-left']}>
				<input placeholder={lang.promocode} type='text' />
				<button className={style['send-btn']}>
					<img src='./Group 92.svg' alt='send-btn' />
				</button>
			</div>
			<div className={style['code-right']}>
				{lang.total}: {totalSum} ₽
			</div>
		</div>
	)
}

export default CartCode
