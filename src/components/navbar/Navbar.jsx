import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { RiCloseLargeFill, RiListUnordered } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import FooterList from '../footer/FooterList'
import style from './Navbar.module.css'
import NavbarLists from './NavbarLists'

const Navbar = () => {
	const [toogle, setToogle] = useState(false)

	const [isFixed, setIsFixed] = useState(false)

	const [timeLeft, setTimeLeft] = useState(24 * 60)

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

	useEffect(() => {
		// Har 1 soniyada qayta ishga tushadigan intervalni o'rnatamiz
		const timer = setInterval(() => {
			setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0))
		}, 1000)

		// Komponent unmounted bo'lganda intervalni tozalash
		return () => clearInterval(timer)
	}, [])

	const formatTime = seconds => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
			.toString()
			.padStart(2, '0')}`
	}

	return (
		<nav>
			<div className='container'>
				<div className={style['nav-top']}>
					<div className={style['top-left']}>
						<ul className={style['nav-top-lists']}>
							<li className={style['location']}>
								<img src='/loacation.svg' alt='loaction-icon' />
								<select>
									<option value='moskva'>Москва</option>
									<option value='perm'>Пермъ</option>
									<option value='sochi'>Сочи</option>
									<option value='kazan'>Казанъ</option>
								</select>
							</li>
							<li className={style[('list-item', 'address')]}>
								Проверить адрес
							</li>
							<li className={style[('list-item', 'delivery')]}>
								Среднее время доставки*: <b>{formatTime(timeLeft)}</b>{' '}
							</li>
							<li className={style['list-item']}>
								<select>
									<option value='ru'>RU</option>
									<option value='uz'>UZ</option>
								</select>
							</li>
						</ul>
					</div>
					<div className={style['top-right']}>
						<ul className={style['nav-top-lists']}>
							<li className={style['list-item']}>
								Время работы: с 11:00 до 23:00
							</li>
							<li className={style['account']}>
								<img src='/Group 108.svg' alt='account-icon' />
								Войти в аккаунт
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
							<Link to={'/'}>Акции</Link>
						</li>
						<li>
							<Link to={'/'}>Пицца</Link>
						</li>
						<li>
							<Link to={'/'}>Суши</Link>
						</li>
						<li>
							<Link to={'/'}>Напитки</Link>
						</li>
						<li>
							<Link to={'/'}>Закуски</Link>
						</li>
						<li>
							<Link to={'/'}>Комбо</Link>
						</li>
						<li>
							<Link to={'/'}>Десерты</Link>
						</li>
						<li>
							<Link to={'/'}>Соусы</Link>
						</li>
						<li className={style['other-links']}>
							Другое ▼
							<ul className={style['other-link']}>
								<NavbarLists />
							</ul>
						</li>
					</ul>
					<div className={style['icons']}>
						<div className={style['heart']}>
							<FaRegHeart size={24} color='white' />
							<div className={style['postions']}>
								<span className={style['count']}>0</span>
							</div>
						</div>
						<Link className={style['cart']}>
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
								Войти в аккаунт
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
					<h3 className={style['contact-title']}>Контакты</h3>
					<FooterList />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
