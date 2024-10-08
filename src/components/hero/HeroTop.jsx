import React from 'react'
import { categories } from '../../data/categories'
import style from './Hero.module.css'
import HeroLinks from './HeroLinks'
const HeroTop = () => {
	console.log(categories)

	return (
		<div className={style['top']}>
			<div className={style['row']}>
				{categories?.map((item, index) => (
					<HeroLinks key={index} {...item} />
				))}
			</div>
		</div>
	)
}

export default HeroTop
