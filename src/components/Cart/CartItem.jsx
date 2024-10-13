import React from 'react'
import Button from '../Button/Button'
import style from './Cart.module.css'

const CartItem = ({ id, image, name, description, price }) => {
	return (
		<div className={style['cards']}>
			<div className={style['cart-item-img']}>
				<img src={image} alt='product-img' />
			</div>
			<div className={style['cart-texts']}>
				<div className={style['left']}>
					<h1>{name}</h1>
					<p>{description}</p>
				</div>
				<div className={style['right']}>
					<Button id={id} />
					<p className={style['price']}>{price + ' ₽'}</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem
