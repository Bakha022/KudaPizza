import React, { useContext, useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { RiCloseLargeFill, RiListUnordered } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext'
import FooterList from '../footer/FooterList'
import style from './Navbar.module.css'
import NavbarLists from './NavbarLists'
import TimeLeft from './TimeLeft'

const Navbar = () => {
	const [toogle, setToogle] = useState(false)

	const [isFixed, setIsFixed] = useState(false)

	const { lang, setLangType } = useContext(LanguageContext)

	const handleScroll = () => {
		if (window.scrollY > 134) {
			setIsFixed(true)
		} else {
			setIsFixed(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav>
			<div className='container'>
				<div className={style['nav-top']}>
					<div className={style['top-left']}>
						<ul className={style['nav-top-lists']}>
							<li className={style['location']}>
								<img src='/loacation.svg' alt='loaction-icon' />
								<select>
									<option value='moskva'>{lang.moscow}</option>
									<option value='perm'>{lang.permian}</option>
									<option value='sochi'>{lang.sochi}</option>
									<option value='kazan'>{lang.kazan}</option>
								</select>
							</li>
							<li className={style[('list-item', 'address')]}>
								{lang.checkAddress}
							</li>
							<li className={style[('list-item', 'delivery')]}>
								{lang.averageDeliveryTime}* :{' '}
								<b>
									<TimeLeft />
								</b>{' '}
							</li>
							<li className={style['list-item']}>
								<select onChange={e => setLangType(e.target.value)}>
									<option value='ru'>RU</option>
									<option value='uz'>UZ</option>
								</select>
							</li>
						</ul>
					</div>
					<div className={style['top-right']}>
						<ul className={style['nav-top-lists']}>
							<li className={style['list-item']}>{lang.openingHours}</li>
							<li className={style['account']}>
								<img src='/Group 108.svg' alt='account-icon' />
								{lang.loginAccount}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={style['line']}></div>
			<div className='container'>
				<div className={style['nav-bottom']}>
					<div className={style['logo']}>
						<Link to={'/'}>
							<img src='/Group 152.svg' alt='logo' />
						</Link>
					</div>
					<ul
						className={`${style['nav-bottom-lists']} ${isFixed ? 'fixed' : ''}`}
					>
						<li>
							<Link to={'/'}>{lang.stock}</Link>
						</li>
						<li>
							<Link to={'/pizza'}>{lang.pizza}</Link>
						</li>
						<li>
							<Link to={'/sushi'}>{lang.sushi}</Link>
						</li>
						<li>
							<Link to={'/drinks'}>{lang.beverages}</Link>
						</li>
						<li>
							<Link to={'/snacks'}>{lang.snacks}</Link>
						</li>
						<li>
							<Link to={'/kombo'}>{lang.combo}</Link>
						</li>
						<li>
							<Link to={'/deserts'}>{lang.dessert}</Link>
						</li>
						<li>
							<Link to={'/sauces'}>{lang.sauces}</Link>
						</li>
						<li className={style['other-links']}>
							{lang.other}▼
							<ul className={style['other-link']}>
								<NavbarLists />
							</ul>
						</li>
					</ul>
					<div className={style['icons']}>
						<Link to={'/heart'} className={style['heart']}>
							<FaRegHeart size={24} color='white' />
							<div className={style['postions']}>
								<span className={style['count']}>0</span>
							</div>
						</Link>
						<Link to={'/cart'} className={style['cart']}>
							<IoCart size={24} color='white	' />
							<div className={style['postions']}>
								<span className={style['count']}>0</span>
							</div>
						</Link>

						<div className={style['toogle']}>
							<RiListUnordered
								onClick={() => setToogle(true)}
								className={style[`${toogle == false ? '' : 'close'}`]}
								size={30}
							/>
							<RiCloseLargeFill
								onClick={() => setToogle(false)}
								className={style[`${toogle ? '' : 'close'}`]}
								size={30}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={style['line']}></div>
			<div
				className={`${style['nav-lists']} ${toogle == true ? 'toogle' : ''}`}
			>
				<div className='container'>
					<div className={style['top-list']}>
						<ul>
							<li className={style['account']}>
								<img src='/Group 108.svg' alt='account-icon' />
								{lang.loginAccount}
							</li>
						</ul>
					</div>
				</div>
				<div className={style['line']}></div>
				<div className='container'>
					<ul className={style['bottom-lists']}>
						<NavbarLists />
					</ul>
				</div>
				<div className={style['line']}></div>
				<div className='container'>
					<FooterList />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
