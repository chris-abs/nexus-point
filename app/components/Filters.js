import DownArrow from '../icons/DownArrow'

const Filters = () => {
  return (
    <div className='w-full md:hidden'>
      <div className='grid place-items-center grid-cols-4 grid-rows-2 gap-[13px]'>
        <div className='h-10 border-b-[3px] border-brand-primary w-full flex justify-center'>
          All
        </div>
        <div className='h-10'>Used</div>
        <div className='h-10'>New</div>
        <div className='h-10'>Offers</div>
        <div className='h-10 col-span-2'>Showing 10 of 324</div>
        <div className='h-10 col-span-2 col-start-3 flex gap-1'>
          Lowest Price
          <DownArrow />
        </div>
      </div>
    </div>
  )
}

export default Filters
