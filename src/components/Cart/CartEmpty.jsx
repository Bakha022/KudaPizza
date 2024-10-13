import React from 'react'
import style from './Cart.module.css' 
const CartEmpty = () => {
	return (
		<div className={style['empty']}>
			<img src="./image.png" alt="" />
		</div>
	)
}

export default CartEmpty