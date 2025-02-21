import { Button, Image, Text } from '@mantine/core'
import Logo from '../../assets/logo.svg'
import navdata from '../../data/navdata'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowLogo(true) // Show when scrolling up
      } else {
        setShowLogo(false) // Hide initially
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='z-100 bg-white w-full sticky top-[-10%] shadow-md overflow-hidden'>
      <div className='upper bg-white px-[4%] h-[60px] pt-1.5 flex border-b-3 border-[#f6f7f9]'>
        <div className='w-14 h-14 mr-5'>
          <Image src={Logo} />
        </div>

        <Text className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
          Orogare Technical and Vocational College
        </Text>

        <Text className='phone text-secondary-500 text-[1.15em] pt-[.6em] ml-auto mr-6'>
          +2547 91964600
        </Text>
      </div>

      <div className='lower bg-white px-[4%] h-[70px] flex items-center justify-between py-2 sticky top-0 z-50 w-full'>
        <div
          className={`w-14 h-14 pt-1.5 mr-5 transition-transform duration-300 ${
            showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <Image src={Logo} />
        </div>
        {/* <div className='nav w-[80%]'> */}
        <div
          className={`nav w-[80%] -ml-[13%] transition-transform duration-300 ${
            showLogo ? 'translate-x-20' : 'translate-x-0'
          }`}
        >
          {navdata.map((item, i) => (
            <Link
              key={i}
              to={`${item.path}`}
              className='nav-path text-text-500 mr-4 p-2 cursor-pointer active:text-secondary-500 active:font-bold text-[1.1em]'
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]'>
          Admission
        </Button>
      </div>
    </div>
  )
}

export default Navbar
