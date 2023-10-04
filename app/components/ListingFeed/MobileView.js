'use client'

import DownArrow from '../../icons/DownArrow'
import Star from '../../icons/Star'
import Button from '../Button'

const MobileView = ({ data, className }) => {
  const carDataArray = data && data.data ? data.data : []

  return (
    <div className={className}>
      {carDataArray.map((car, index) => (
        <div className='py-5' key={index}>
          <div className='w-full flex flex-row overflow-x-scroll px-[13px]'>
            {car.media_urls && car.media_urls.length > 0 ? (
              <img
                className='rounded-xl w-[113px] h-[84px]'
                src={car.media_urls[0].large}
                alt={`${car.make} ${car.model}`}
                onError={(e) => {
                  e.target.src = '/default-car-image.jpeg'
                  e.target.onerror = null
                }}
              />
            ) : (
              <img src='/default-car-image.jpeg' alt='Default Car' />
            )}
          </div>
          <div className='px-5 pt-5'>
            <div>
              <div className='flex'>
                <h2 className='flex flex-grow text-[14px]'>
                  {car.plate} {car.make} {car.model}
                </h2>
                <div className='flex justify-center items-center gap-2'>
                  <button className='lowercase first-letter:capitalize text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
                    {car.advert_classification}
                  </button>
                  <button>
                    <Star />
                  </button>
                </div>
              </div>
              <h2 className='text-text-grey text-[12px]'>{car.name}</h2>
            </div>
            <div className='grid grid-cols-2 gap-2 pt-[6px] text-[12px]'>
              <div className='grid grid-rows-2 justify-start'>
                <div className='flex'>
                  <h3 className='text-text-grey '>
                    {car.odometer_value} miles
                    <span className='px-1 text-borders'>|</span>
                  </h3>
                  <h3 className='text-text-grey'>{car.fuel_type}</h3>
                </div>
                <div className='flex'>
                  <h3 className='lowercase first-letter:capitalize text-text-grey'>
                    {car.technical_data.transmission.value}
                    <span className='px-1 text-borders'>|</span>
                  </h3>
                  <h3 className='text-text-grey'>{car.body_type}</h3>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  {car.finance ? (
                    <h3 className='text-[14px]'>
                      <b>£{car.monthly_payment}</b> /mo (PCP)
                    </h3>
                  ) : (
                    <h3 className=''>*No finance available*</h3>
                  )}
                  <div className='flex gap-2'>
                    <h3 className='text-traffic-light-red'>£{car.price}</h3>
                    {car.price === car.original_price ? (
                      ''
                    ) : (
                      <h3 className='line-through'>£{car.original_price}</h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='grid grid-cols-6 gap-2 py-[30px]'>
        <Button>&lt;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>&gt;</Button>
        <Button>&gt;&gt;</Button>
      </div>
      <button className='w-full justify-center underline pb-[30px] text-[16px] text-text-grey'>
        Back to top
      </button>
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

export default MobileView
