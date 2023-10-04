import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import carData from '../../data.json'
import FinanceBanner from './FinanceBanner'
import Filters from './Filters'
import Legal from './Legal'

const Layout = ({ children }) => {
  const data = carData.data

  return (
    <div>
      <Nav data={data} />
      <FinanceBanner />
      <Filters />
      {children}
      <Footer data={data} />
      <Legal />
    </div>
  )
}

export default Layout
