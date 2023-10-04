import Star from '../icons/Star'

const Listing = ({ car, index }) => {
  return (
    <div key={index}>
      <div>
        <div className='w-full aspect-square flex flex-row overflow-x-scroll'>
          {car.media_urls && car.media_urls.length > 0 ? (
            <img
              className='rounded-t-xl h-full w-full '
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
        <div className='shadow-md p-[10px] rounded-b-xl'>
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
            <h2 className='text-text-grey text-[12px] truncate'>{car.name}</h2>
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
    </div>
  )
}

export default Listing
