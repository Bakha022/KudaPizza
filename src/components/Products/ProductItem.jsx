import React from 'react'
import { products } from '../../data/products'
import style from './Product.module.css'
import ProductCards from './ProductCards'

const ProductItem = ({ name }) => {
	// console.log(products)

	return (
		<>
			<div className={style['product-titles']}>
				<h1 className={style['category-title']}>{name}</h1>
				<button className={style['product-filter-btn']}>
					<img src='/Filter.svg' alt='filter-icon' />
					Фильтры
				</button>
			</div>

			<div className={style['products']}>
				{products
					?.filter(item => item.category.toLowerCase() == name.toLowerCase())
					.map((item, id) => (
						<ProductCards {...item} key={id} />
					))}
			</div>
		</>
	)
}

export default ProductItem
