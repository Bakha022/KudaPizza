import React from 'react'
import { categories } from '../../data/categories'
import style from './Product.module.css'
import ProductItem from './ProductItem'

const Products = () => {
	return (
		<div className={style['products-section']}>
			{categories.map((item, index) => (
				<ProductItem key={index} {...item} />
			))}
		</div>
	)
}

export default Products
