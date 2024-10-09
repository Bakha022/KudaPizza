import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const FooterList = () => {
	const { lang } = useContext(LanguageContext)

	return (
		<ul className='footer-lists'>
			<li>
				<img src='/Group 55.svg' alt='phone-icon' />
				+7 (926) 223-10-11
			</li>
			<li>
				<img src='/Group 5.svg' alt='phone-icon' />
				{lang.location}
			</li>
			<li>
				<ul className='list-row'>
					<li>
						<img src='/Subtract.svg' alt='phone-icon' />
						Facebook
					</li>
					<li>
						<img src='/Vector.svg' alt='phone-icon' />
						Instagram
					</li>
				</ul>
			</li>
		</ul>
	)
}

export default FooterList
