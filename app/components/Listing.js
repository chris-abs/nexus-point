import Star from '../icons/Star'

const Listing = ({ car, index }) => {
  return (
    <div key={index}>
      <div className='relative w-full aspect-square flex flex-row overflow-x-scroll'>
        <img
          className='hidden md:block lg:hidden rounded-t-xl h-full w-full'
          src={car.media_urls[0].medium}
          alt={`${car.make} ${car.model}`}
        />
        <img
          className='hidden lg:block rounded-t-xl h-full w-full'
          src={car.media_urls[0].medium}
          alt={`${car.make} ${car.model}`}
        />
        <p className='absolute left-[10px] top-[10px] lowercase first-letter:capitalize text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
          {car.advert_classification}
        </p>
        <div className='absolute left-[10px] bottom-[10px] flex gap-[10px]'>
          <p className='text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
            {car.odometer_value} miles
          </p>
          <p className='text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
            {car.fuel_type}
          </p>
          <p className='lowercase first-letter:capitalize text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
            {car.technical_data.transmission.value}
          </p>
          <p className='text-[12px] bg-framework-dark text-white px-[10px] py-[1px] rounded-lg'>
            {car.body_type}
          </p>
        </div>
      </div>
      <div className='shadow-md p-[10px] rounded-b-xl'>
        <div>
          <div className='flex'>
            <h2 className='flex flex-grow text-[14px]'>
              {car.plate} {car.make} {car.model}
            </h2>
            <button>
              <Star />
            </button>
          </div>
          <h2 className='text-text-grey text-[12px] truncate'>{car.name}</h2>
        </div>
        <div className='pt-[6px] text-[12px]'>
          <div className='flex justify-between'>
            <div>
              {car.finance ? (
                <h3 className='text-[14px]'>
                  <b>£{car.monthly_payment}</b> /mo (PCP)
                </h3>
              ) : (
                <h3 className=''>*Finance available*</h3>
              )}
              <div className='flex gap-2'>
                <h3 className='text-traffic-light-red'>£{car.price}</h3>
                {car.price === car.original_price ? (
                  ''
                ) : (
                  <h3 className='line-through'>£{car.original_price}</h3>
                )}
                <h3 className='text-[#7572FF]'>Calculate finance</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
