const Chip = ({ disabled, active, clear, text, fill }) => {
  return (
    <button
      className={`rounded-[16px] px-[15px] py-[6px]
    ${
      clear
        ? 'text-traffic-light-red bg-red-200/30'
        : fill
        ? 'bg-[#757277] text-white'
        : disabled
        ? 'border-[1px] border-borders text-text-grey'
        : active
        ? 'text-white bg-brand-primary'
        : 'text-black border-[1px] border-black'
    }
      `}>
      {text}
    </button>
  )
}

export default Chip
