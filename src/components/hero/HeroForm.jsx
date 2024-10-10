import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import style from './Hero.module.css'

const HeroForm = () => {
	const { lang } = useContext(LanguageContext)
	return (
		<div className={style['hero-form']}>
			<div className={style['hero-form-row']}>
				<p className={style['form-text']}>{lang.checkDeliveryAddress}</p>
				<div className={style['input-box']}>
					<img src='/loacation.svg' alt='loaction-icon' />
					<input placeholder={lang.address} type='text' />
				</div>
				<button className={style['form-btn']}>{lang.check}</button>
			</div>
		</div>
	)
}

export default HeroForm
