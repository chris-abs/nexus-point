import Plus from '../icons/plus'

const Heading = ({ text, disabled, active }) => (
  <div
    className={`flex justify-between items-center p-[13px]
      ${active ? 'bg-brand-primary rounded-2xl' : ''}
    `}>
    <h5
      className={`text-[16px]
      ${disabled ? 'text-[#A2A9AF]' : active ? 'text-white' : 'text-black'}
        `}>
      {text}
    </h5>
    <Plus
      className={`border-[#F6F7FB] rounded-xl p-1 border-[1px]
        ${
          disabled
            ? 'text-[#D1D6E0]'
            : active
            ? 'bg-white text-brand-primary'
            : 'text-[#D1D6E0] '
        }
      `}
    />
  </div>
)

export default Heading
