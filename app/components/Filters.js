const Filters = () => {
  return (
    <div className='w-full md:hidden'>
      <div className='grid place-items-center grid-cols-4 grid-rows-2 gap-0'>
        <div className='h-10'>All</div>
        <div className='h-10'>Used</div>
        <div className='h-10'>New</div>
        <div className='h-10'>Offers</div>
        <div className='h-10 col-span-2'>Showing 10 of 324</div>
        <div className='h-10 col-span-2 col-start-3'>Lowest Price</div>
      </div>
    </div>
  )
}

export default Filters
