import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { products } from '../data/products'
import { LanguageContext } from './LanguageContext'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem('cart')) || []
	)
	const [like, setLike] = useState(
		JSON.parse(localStorage.getItem('like')) || []
	)

	const { lang } = useContext(LanguageContext)
	
	const controlQuantity = (mark, id) => {
		let newCart = cart.map(pr => {
			if (pr.id == id) {
				mark == '+' ? pr.quantity++ : pr.quantity--
			}
			return pr
		})
		return newCart
	}
	const addedCart = id => {
		let product = products.find(pr => pr.id == id)
		let productInCart = cart.find(pr => pr.id == id)
		let newCart
		if (productInCart) {
			newCart = controlQuantity('+', id)
		} else {
			product.quantity = 1
			newCart = [...cart, product]
		}

		setCart(newCart)
		localStorage.setItem('cart', JSON.stringify(newCart))
		toast.success(lang.successfuly)
	}
	const increase = id => {
		let newCart = controlQuantity('+', id)
		setCart(newCart)
		localStorage.setItem('cart', JSON.stringify(newCart))
	}
	const decrease = id => {
		let newCart
		let productInCart = cart.find(pr => pr.id == id)
		if (productInCart.quantity > 1) {
			newCart = controlQuantity('-', id)
		} else {
			newCart = cart.filter(item => item.id !== id)
			toast.info(lang.deletedCart)
		}
		setCart(newCart)
		localStorage.setItem('cart', JSON.stringify(newCart))
	}

	const addedLike = id => {
		let productLike = products.find(pr => pr.id == id)
		let newLike = [...like, productLike]
		toast.success(lang.favourite)
		setLike(newLike)
		localStorage.setItem('like', JSON.stringify(newLike))
	}

	const removedLike = id => {
		const newLike = like.filter(item => item.id !== id)
		setLike(newLike)
		toast.error(lang.unFavourite)
		localStorage.setItem('like', JSON.stringify(newLike))
	}

	const state = {
		cart,
		like,
		addedCart,
		addedLike,
		increase,
		decrease,
		removedLike,
	}
	return (
		<ProductContext.Provider value={state}>{children}</ProductContext.Provider>
	)
}

export default ProductContextProvider
