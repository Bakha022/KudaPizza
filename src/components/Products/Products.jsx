import React from 'react'
import { useLocation } from 'react-router-dom'
import { categories } from '../../data/categories'
import style from './Product.module.css'
import ProductItem from './ProductItem'

const Products = () => {
	const location = useLocation()
	const pathName = location.pathname.split('/')[1]

	return (
		<div className={style['products-section']}>
			{location.pathname == '/'
				? categories.map((item, index) => <ProductItem key={index} {...item} />)
				: categories
						.filter(item => item.path.split('/')[1].toLowerCase() == pathName)
						.map((item, index) => <ProductItem key={index} {...item} />)}
		</div>
	)
}

export default Products
