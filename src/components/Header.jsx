import Clock from './Clock'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { Link } from 'wouter'

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full mb-4'>
      <Link href='/' className='flex gap-2 items-baseline'>
        <Logo className='w-8 h-8' />
        <span className='text-xl'>Notifier App</span>
      </Link>
      <Clock />
    </header>
  )
}

export default Header
