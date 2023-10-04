import React from 'react'

import Nav from './Nav'
import SideBar from './Sidebar'
import Footer from './Footer'
import carData from '../../data.json'
import FinanceBanner from './FinanceBanner'
import Filters from './Filters'

const Layout = ({ children }) => {
  const data = carData.data

  return (
    <div>
      <Nav data={data} />
      <FinanceBanner />
      <Filters />
      {children}
      <SideBar data={data} />
      <Footer data={data} />
    </div>
  )
}

export default Layout
