
function Button({ children, onClick, disabled, color }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[${color}] hover:bg-[#747474] text-white py-2 px-4 rounded-[12px] transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
