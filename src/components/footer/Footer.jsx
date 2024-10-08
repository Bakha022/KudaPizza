import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className={style['row']}>
					<div className={style['col-3']}>
						<div className={style['logo']}>
							<Link to={'/'}>
								<img src='/Group 152.svg' alt='logo' />
							</Link>
						</div>
					</div>
					<div className={style['col-3']}>
						<h3>Куда пицца</h3>
						<ul>
							<li>О компании</li>
							<li>Пользовательское соглашение</li>
							<li>Условия гарантии</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>Помощь</h3>
						<ul>
							<li>Ресторан</li>
							<li>Контакты</li>
							<li>Отследить заказ</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>Контакты</h3>
						<ul>
							<li>
								<img src='/Group 55.svg' alt='phone-icon' />
								+7 (926) 223-10-11
							</li>
							<li>
								<img src='/Group 5.svg' alt='phone-icon' />
								Москва, ул. Юных Ленинцев, д.99
							</li>
							<li>
								<div className={style['list-row']}>
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
					</div>
				</div>
			</div>
			<p className={style['web-site-by']}>© BakhaDev 2024 — Куда Пицца</p>
		</footer>
	)
}

export default Footer
