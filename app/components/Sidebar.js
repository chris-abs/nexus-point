import Chip from './Chip'
import Heading from './Heading'

const Sidebar = () => {
  return (
    <aside className='hidden lg:block row-span-5 pr-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-[18px] font-[700] py-2'>Filters</h2>
        <Chip text='Reset' clear />
      </div>
      <h4 className='text-text-disabled uppercase font-[900] py-4 mt-2 text-[12px] tracking-[1.8px]'>
        brand
      </h4>
      <Heading text='Make' />
      <Heading text='Model' disabled />
      <h4 className='text-text-disabled uppercase font-[900] py-4 mt-2 text-[12px] tracking-[1.8px]'>
        budget
      </h4>
      <Heading text='Min. price' />
      <Heading text='Max. price' />
      <h4 className='text-text-disabled uppercase font-[900] py-4 mt-2 text-[12px] tracking-[1.8px]'>
        specification
      </h4>
      <Heading text='Fuel type' />
      <Heading text='Body type' active />
      <Heading text='Transmission' />
      <Heading text='Engine size' />
      <Heading text='Mileage' />
      <Heading text='Colour' />
      <Heading text='Doors' />
      <Heading text='Seats' />
      <Heading text='Features' />
    </aside>
  )
}

export default Sidebar
