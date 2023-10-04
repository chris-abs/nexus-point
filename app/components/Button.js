const Button = ({ children }) => {
  return (
    <button className='h-[30px] px-2 rounded-lg justify-center items-center font-[#55595D] border-[1px] border-borders'>
      {children}
    </button>
  )
}

export default Button
