import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { LanguageContext } from '../../context/LanguageContext'
import { ProductContext } from '../../context/ProductContext'
import Button from '../Button/Button'
import style from './Product.module.css'

const ProductCards = ({ id, filter, image, name, description, price }) => {
	const { lang } = useContext(LanguageContext)
	const { addedCart, cart, handleHeart, heartShow } = useContext(ProductContext)
	const productInCart = cart.find(pr => pr.id == id)

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
				<div
					style={description ? { height: '198px' } : { height: 'auto' }}
					className={style['wrapper']}
				>
					<h3>{name}</h3>
					<p className={style['text']}>{description}</p>
					<div className={style['card-bottom']}>
						{productInCart ? (
							<Button id={id} />
						) : (
							<button
								className={style['add-cart']}
								onClick={() => addedCart(id)}
							>
								{lang.addToCart}
							</button>
						)}
						<p className={style['counter']}>от {price} ₽</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCards
