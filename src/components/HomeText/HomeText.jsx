import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import style from './HomeText.module.css'
const HomeText = () => {
	const [showText, setShowText] = useState(false)

	const { lang } = useContext(LanguageContext)
	return (
		<div className={style['home-text-section']}>
			<div className={style['text-title']}>{lang.pizzaDeliveryInMoscow}</div>
			<div
				className={`${style['text-description']} ${
					showText ? 'show-text' : ''
				}`}
			>
				{lang.deliveryText1}
				<h3 className={style['description-title']}>{lang.howToMakeOrder}</h3>
				{lang.deliveryText2}
			</div>
			<button
				onClick={() => setShowText(!showText)}
				className={style['show-btn']}
			>
				{showText ? lang.ShowBriefly : lang.ShowFull}
			</button>
		</div>
	)
}

export default HomeText
