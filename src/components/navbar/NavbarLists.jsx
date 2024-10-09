import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const NavbarLists = () => {
	const { lang } = useContext(LanguageContext)
	return (
		<>
			<li>{lang.stock}</li>
			<li>{lang.aboutCompany}</li>
			<li>{lang.termsOfUse}</li>
			<li>{lang.warrantTterms}</li>
			<li>{lang.restaurant}</li>
			<li>{lang.contacts}</li>
			<li>{lang.support}</li>
			<li>{lang.trackYourOrder}</li>
		</>
	)
}

export default NavbarLists
