import React from 'react'
import style from './Hero.module.css'

const AdvertisingList = ({ name, image }) => {
	return (
		<>
			<div className={style['card']}>
				<div className={style['card-img']}>
					<img src={image} alt='card-img' />
				</div>
				<p className={style['card-text']}>{name}</p>
			</div>
		</>
	)
}

export default AdvertisingList
