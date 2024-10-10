import React from 'react'
import style from './Hero.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AdvertisingList = ({ name, image }) => {
	return (
		<>
			<div className={style['card']}>
				<div className={style['card-img']}>
					<LazyLoadImage effect='blur' src={image} alt='card-img' />
				</div>
				<p className={style['card-text']}>{name}</p>
			</div>
		</>
	)
}

export default AdvertisingList
