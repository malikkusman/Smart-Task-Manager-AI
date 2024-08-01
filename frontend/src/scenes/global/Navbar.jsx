import { Button, Logo } from '../../components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between relative'>
      <Logo />

      <div className='flex gap-4'> 
        <Link to='/signup'>
          <Button text='Sign Up' />
        </Link>

        <Link to='/signin'>
          <Button text='Sign In' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
