import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import style from './Hero.module.css'

const HeroLinks = ({ name, image, path }) => {
	return (
		<Link to={path}>
			<div className={style['box']}>
				<div className={style['box-img']}>
					<LazyLoadImage src={image} alt='categories-img' effect ='blur' />
				</div>
				<p className={style['subtitle']}>{name}</p>
			</div>
		</Link>
	)
}

export default HeroLinks
