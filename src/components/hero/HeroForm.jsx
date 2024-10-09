import React, { useContext } from 'react'
import style from './Hero.module.css'
import { LanguageContext } from '../../context/LanguageContext'

const HeroForm = () => {
	const { lang } = useContext(LanguageContext)
	return (
		<div className={style['hero-form']}>
			<div className={style['hero-form-row']}>
				<p className={style['form-text']}>{}</p>
				<div className={style['input-box']}>
					<img src='/loacation.svg' alt='loaction-icon' />
					<input placeholder='Адрес' type='text' />
				</div>
				<button className={style['form-btn']}>Проверить</button>
			</div>
		</div>
	)
}

export default HeroForm
