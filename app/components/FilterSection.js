import Filters from '../icons/Filters'

const FilterSection = () => {
  return (
    <div className='lg:hidden fixed bottom-0 left-0 right-0 flex justify-center items-center z-20 w-full'>
      <div className='w-full flex justify-center bg-gradient-to-t from-white via-white/50 to-transparent border-b-5 border-transition duration-300 text-center py-2'>
        <button className='flex py-2 px-[15px] rounded-xl gap-1 justify-center text-white bg-brand-primary'>
          <Filters />
          Filters
        </button>
      </div>
    </div>
  )
}

export default FilterSection
