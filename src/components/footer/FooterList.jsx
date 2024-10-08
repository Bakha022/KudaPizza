import React from 'react'

const FooterList = () => {
	return (
		<ul className='foote-lists'>
			<li>
				<img src='/Group 55.svg' alt='phone-icon' />
				+7 (926) 223-10-11
			</li>
			<li>
				<img src='/Group 5.svg' alt='phone-icon' />
				Москва, ул. Юных Ленинцев, д.99
			</li>
			<li>
				<div className={'list-row'}>
					<li>
						<img src='/Subtract.svg' alt='phone-icon' />
						Facebok
					</li>
					<li>
						<img src='/Vector.svg' alt='phone-icon' />
						Instagram
					</li>
				</div>
			</li>
		</ul>
	)
}

export default FooterList
