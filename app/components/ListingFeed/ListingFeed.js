'use client'

import MobileView from './MobileView'
import MainView from './MainView'

const ListingFeed = ({ data }) => {
  return (
    <section className='py-5 px-[13px] md:py-[15px] md:px-[50px] md:gap-[15px] bg-[#fff]'>
      <MobileView className='block md:hidden' data={data} />
      <MainView className='hidden md:block' data={data} />
    </section>
  )
}

export default ListingFeed
