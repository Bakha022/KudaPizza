import React, { createContext, useState } from 'react'
import languages from '../data/languages'

export const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
	const [langType, setLangType] = useState(
		localStorage.getItem('languages') || 'ru'
	)

	const handleLang = e => {
		setLangType(e.target.value)

		localStorage.setItem('languages', e.target.value)
	}

	const state = { langType, lang: languages[langType], handleLang }

	return (
		<LanguageContext.Provider value={state}>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageContextProvider
