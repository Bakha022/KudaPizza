import React, { useContext, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { toast } from 'react-toastify'
import { LanguageContext } from '../../context/LanguageContext'
import style from './Product.module.css'

const ProductCards = ({
	id,
	category,
	filter,
	image,
	name,
	description,
	price,
	discount,
}) => {
	const [heartShow, setHeartShow] = useState(false)
	const { lang } = useContext(LanguageContext)
	const handleHeart = e => {
		setHeartShow(!heartShow)
		e.stopPropagation()
		if (heartShow) {
			toast.info("Mahsulotlar sevimlilar bo'limidan olib tashlandi")
		} else {
			toast.success("Mahsulotlar sevimlilar bo'limiga qo'shildi")
		}
	}
	return (
		<div className={style['product-card']}>
			<div className={style['product-item-img']}>
				{filter ? (
					<span className={style['filter-adversting']}>{filter}</span>
				) : (
					''
				)}
				<div className={style['icon-section']}>
					<FaRegHeart
						color='red'
						style={{
							cursor: 'pointer',
							display: `${heartShow ? 'none' : 'block'}`,
						}}
						size={26}
						onClick={handleHeart}
					/>
					<FaHeart
						color='red'
						style={{
							cursor: 'pointer',
							display: `${heartShow == false ? 'none' : 'block'}`,
						}}
						size={26}
						onClick={handleHeart}
					/>
				</div>
				<LazyLoadImage alt='product-item-img' effect='blur' src={image} />
			</div>
			<div className={style['card-title']}>
				<h3>{name}</h3>
				<p className={style['text']}>{description}</p>
				<div className={style['card-bottom']}>
					<button>{lang.addToCart}</button>
					<p className={style['counter']}>от {price} ₽</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCards
