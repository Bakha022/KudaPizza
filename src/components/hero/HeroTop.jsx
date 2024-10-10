import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import style from './Hero.module.css'
import HeroLinks from './HeroLinks'
const HeroTop = () => {
	return (
		<div className='top'>
			<div className={style['row']}>
				<Link to={'/'}>
					<div className={style['box']}>
						<div className={style['box-img']}>
							<LazyLoadImage
								src='/categories\Group 96.svg'
								alt='categories-img'
								effect='blur'
							/>
						</div>
						<p className={style['subtitle']}>Акции</p>
					</div>
				</Link>
				{categories?.map((item, index) => (
					<HeroLinks key={index} {...item} />
				))}
			</div>
		</div>
	)
}

export default HeroTop
