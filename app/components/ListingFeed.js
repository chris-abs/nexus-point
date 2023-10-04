'use client'

import DownArrow from '../icons/DownArrow'
import Star from '../icons/Star'
import Button from './Button'

const ListingFeed = ({ data }) => {
  // Ensure that data is an object with a "data" array inside it
  const carDataArray = data && data.data ? data.data : []

  return (
    <section className='p-5'>
      {carDataArray.map((car, index) => (
        <div key={index}>
          <div className='w-full flex flex-row overflow-x-scroll'>
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
          <div className='py-5'>
            <div className='flex'>
              <h2 className='flex flex-grow'>
                {car.plate} {car.make} {car.model0}
              </h2>
              <div className='flex justify-center items-center gap-2'>
                <button className='lowercase first-letter:capitalize bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
                  {car.advert_classification}
                </button>
                <button>
                  <Star />
                </button>
              </div>
            </div>
            <h2>{car.name}</h2>
          </div>
          <div className='grid grid-cols-2 pb-5 gap-2'>
            <div className='flex'>
              <h3>{car.odometer_value} miles</h3>
              <span className='px-1'>|</span>
              <h3>{car.fuel_type}</h3>
              <span className='px-1'>|</span>

              <h3 className='lowercase first-letter:capitalize'>
                {car.technical_data.transmission.value}
              </h3>
              <span className='px-1'>|</span>

              <h3>{car.body_type}</h3>
            </div>
            <div>
              {car.finance ? (
                <h3>
                  <b>£{car.monthly_payment}</b> /mo (PCP)
                </h3>
              ) : (
                ''
              )}
              <div className='flex gap-2'>
                <h3>£{car.price}</h3>
                {car.price === car.original_price ? (
                  ''
                ) : (
                  <h3 className='line-through'>£{car.original_price}</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='grid grid-cols-6 gap-2'>
        <Button>&lt;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>&gt;</Button>
        <Button>&gt;&gt;</Button>
      </div>
      <button className='w-full justify-center underline'> Back to top</button>
      <div className='p-[15px] bg-framework-light'>
        <p>
          <span className='font-bold'>Representative example:</span> Borrowing
          £11,790.00 over 4 years with a representative APR of 7.9 %, an annual
          interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount
          payable would be £273.59 per month, with a total cost of credit of
          £1,843.32 and a total amount payable of £13,633.32.
        </p>
        <div className='flex items-center w-full px-[13px] py-[13px] bg-white rounded-2xl'>
          <button className='flex flex-grow'>Show breakdown</button>
          <div className='bg-borders rounded-lg p-2'>
            <DownArrow className='text-white' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListingFeed
