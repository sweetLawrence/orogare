import { Button, Card, Image, Text } from '@mantine/core'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='p-2.5'>
      <div className='upper flex'>
        <div className='w-16 h-16 mr-3'>
          {/* <img src={Logo} alt="orogare logo" /> */}
          <Image
            // radius='md'
            src={Logo}
            // className='w-[2px]'
            
          />
        </div>

        {/* <h1 className='text-red-400'>Hello </h1> */}

        <Text className="text-red-500 font-bold">Orogare Technical and Vocational College</Text>
    
      </div>

      <div className='lower'></div>
    </div>
  )
}

export default Navbar
