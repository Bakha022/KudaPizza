import React from 'react'
import AdvertisingList from './AdvertisingList'
import style from './Hero.module.css'
import HeroForm from './HeroForm'
const HeroBottom = () => {
	const advertising = [
		{
			name: '3 средние пиццыот 999 рублей',
			image: './Group 82.png',
		},
		{
			name: 'Кэшбек 10% на самовывоз (доставка)',
			image: './Group 83.png',
		},
		{
			name: '3 средние пиццыот 999 рублей',
			image: './Group 82.png',
		},
		{
			name: 'Кэшбек 10% на самовывоз (доставка)',
			image: './Group 83.png',
		},
	]
	return (
		<div className={style['bottom']}>
			<div className={style['bottom-row']}>
				{advertising?.map((item, index) => (
					<AdvertisingList key={index} {...item} />
				))}
			</div>
			<HeroForm />
		</div>
	)
}

export default HeroBottom
