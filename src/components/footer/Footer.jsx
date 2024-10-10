import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'
import style from './Footer.module.css'
import FooterList from './FooterList'

const Footer = () => {
	const { lang } = useContext(LanguageContext)
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
							<li>{lang.aboutCompany}</li>
							<li>{lang.termsOfUse}</li>
							<li>{lang.warrantTterms}</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>{lang.Help}</h3>
						<ul className={style['col-lists']}>
							<li>{lang.restaurant}</li>
							<li>{lang.contacts}</li>
							<li>{lang.trackYourOrder}</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h3>{lang.contacts}</h3>
						<FooterList />
					</div>
				</div>
			</div>
			<p className={style['web-site-by']}>© BakhaDev 2024 — Куда Пицца</p>
		</footer>
	)
}

export default Footer
