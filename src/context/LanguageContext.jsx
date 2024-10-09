import React, { createContext, useState } from 'react'
import languages from '../data/languages'

export const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
	const [langType, setLangType] = useState('ru')

	const state = { langType, lang: languages[langType], setLangType }

	return (
		<LanguageContext.Provider value={state}>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageContextProvider
