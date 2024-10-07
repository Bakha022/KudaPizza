import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const Layout = () => {
	return (
		<Fragment>
			<Navbar />
			<Outlet />
			<Footer />
		</Fragment>
	)
}

export default Layout
