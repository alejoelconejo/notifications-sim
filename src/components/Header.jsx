import Clock from './Clock'

const Header = () => {
  return (
    <header className='flex justify-between w-full items-center mb-6'>
      <h2 className='font-extrabold text-xl flex items-center'>
        Notifications
        <span className='text-white text-lg rounded-md bg-blue-900 px-3 mx-2'>
          3
        </span>
      </h2>
      <Clock />
      <a className='text-gray-500 text-sm'>Mark all as read</a>
    </header>
  )
}

export default Header
