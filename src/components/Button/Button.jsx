import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import style from './Button.module.css'

const Button = ({ id }) => {
	const { increase, cart, decrease } = useContext(ProductContext)
	const quantityInButton = cart.find(pr => pr.id == id)

	return (
		<div className={style['count-btns']}>
			<button onClick={()=> decrease(id)} className={style['decrease-btn']}>-</button>
			<p className={style['counter-text']}>{quantityInButton.quantity}</p>
			<button onClick={()=> increase(id)} className={style['increase-btn']}>
				+
			</button>
		</div>
	)
}

export default Button
