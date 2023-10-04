import Button from '../Button'
import DownArrow from '@/app/icons/DownArrow'
import Listing from '../Listing'
import Sidebar from '../Sidebar'
import Chip from '../Chip'

const MainView = ({ data, className }) => {
  const carDataArray = data && data.data ? data.data : []

  return (
    <div className={className}>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-[10px]'>
        <Sidebar />
        <div className='hidden lg:flex items-center gap-2 col-span-3 pb-[30px]'>
          <h2 className='text-[18px] font-[700] pr-[22px]'>Showing 339 cars</h2>
          <Chip text='All' active />
          <Chip text='Used' disabled />
          <Chip text='New' />
          <Chip text='Offers' disabled />
        </div>

        {carDataArray.map((car, index) => (
          <Listing car={car} key={index} />
        ))}
      </div>
      <div className='flex w-full justify-between items-center'>
        <button className='underline text-[16px] text-text-grey'>
          Back to top
        </button>
        <div className='flex justify-center flex-grow'>
          <div className='grid grid-cols-6 gap-2 py-[30px]'>
            <Button>&lt;</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>&gt;</Button>
            <Button>&gt;&gt;</Button>
          </div>
        </div>
        <button className='flex bg-framework-light p-[10px] rounded-xl'>
          Lowest price
          <DownArrow />
        </button>
      </div>
      <div className='p-[15px] bg-framework-light border-[1px] border-borders rounded-2xl'>
        <p className='pb-[15px]'>
          <span className='font-bold'>Representative example:</span> Borrowing
          £11,790.00 over 4 years with a representative APR of 7.9 %, an annual
          interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount
          payable would be £273.59 per month, with a total cost of credit of
          £1,843.32 and a total amount payable of £13,633.32.
        </p>
        <div className='flex items-center w-full px-[13px] py-[13px] bg-white rounded-2xl'>
          <button className='flex flex-grow text-[16px] text-text-grey'>
            Show breakdown
          </button>
          <div className='bg-borders rounded-lg p-2'>
            <DownArrow className='text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainView
