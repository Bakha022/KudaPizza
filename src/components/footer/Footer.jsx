import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import FooterList from './FooterList'

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
						<ul className={style['col-lists']}>
							<li>О компании</li>
							<li>Пользовательское соглашение</li>
							<li>Условия гарантии</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>Помощь</h3>
						<ul className={style['col-lists']}>
							<li>Ресторан</li>
							<li>Контакты</li>
							<li>Отследить заказ</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>Контакты</h3>
						<FooterList />
					</div>
				</div>
			</div>
			<p className={style['web-site-by']}>© BakhaDev 2024 — Куда Пицца</p>
		</footer>
	)
}

export default Footer
