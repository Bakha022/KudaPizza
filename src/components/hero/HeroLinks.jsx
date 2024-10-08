import React from 'react'
import { Link } from 'react-router-dom'
import style from './Hero.module.css'

const HeroLinks = ({ name, image, path }) => {
	return (
		<Link to={path}>
			<div className={style['box']}>
				<div className={style['box-img']}>
					<img src={image} alt='categories-img' />
				</div>
				<p className={style['subtitle']}>{name}</p>
			</div>
		</Link>
	)
}

export default HeroLinks
