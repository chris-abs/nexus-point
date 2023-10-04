import React from 'react'

import Nav from './Nav'
import FilterSection from './FilterSection'
import FinanceBanner from './FinanceBanner'
import Filters from './Filters'
import Footer from './Footer'
import Legal from './Legal'
import carData from '../../data.json'

const Layout = ({ children }) => {
  const data = carData.data

  return (
    <div className='relative'>
      <Nav data={data} />
      <FilterSection />
      <FinanceBanner />
      <Filters />
      {children}
      <Footer data={data} />
      <Legal />
    </div>
  )
}

export default Layout
