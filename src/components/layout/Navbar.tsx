// import { Button, Image, Text } from '@mantine/core'
// import Logo from '../../assets/logo.svg'
// import navdata from '../../data/navdata'
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// const Navbar = () => {
//   const [showLogo, setShowLogo] = useState(false)
//   const [selectedPath, setSelectedPath] = useState(location.pathname)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 60) {
//         setShowLogo(true) // Show when scrolling up
//       } else {
//         setShowLogo(false) // Hide initially
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setSelectedPath(location.pathname) // Update on route change
//   }, [location.pathname])

//   return (
//     <div className='z-100 bg-white w-full sticky top-[-10%] shadow-md overflow-hidden'>
//       <div className='upper bg-white px-[4%] h-[60px] pt-1.5 flex border-b-3 border-[#f6f7f9]'>
//         <div className='w-14 h-14 mr-5'>
//           <Link to='/'>
//             <Image src={Logo} />
//           </Link>
//         </div>

//         <Text className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
//           Orogare Technical and Vocational College
//         </Text>

//         <Text className='phone text-secondary-500 text-[1.15em] pt-[.6em] ml-auto mr-6'>
//           +2547 91964600
//         </Text>
//       </div>

//       <div className='lower bg-white px-[4%] h-[70px] flex items-center justify-between py-2 sticky top-0 z-1000 w-full'>
//         <div
//           className={`w-14 h-14 pt-1.5 mr-5 transition-transform duration-300 ${
//             showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//           }`}
//         >
//           <Link to='/'>
//             <Image src={Logo} />
//           </Link>
//         </div>
//         {/* <div className='nav w-[80%]'> */}
//         <div
//           className={`nav w-[80%] -ml-[13%] transition-transform duration-300 ${
//             showLogo ? 'translate-x-20' : 'translate-x-0'
//           }`}
//         >
//           {navdata.map((item, i) => (
//             <Link
//               key={i}
//               to={`${item.path}`}
//               onClick={() => setSelectedPath(item.path)}
//               className={`relative nav-path text-text-500 mr-4 pb-3.5 p-2 cursor-pointer text-[1.1em]
//                 ${
//                   selectedPath === item.path
//                     ? 'boder-b-4 borer-secondary-500 !text-secondary-500 font-bold'
//                     : ''
//                 }`}
//               // className='nav-path text-text-500 mr-4 p-2 cursor-pointer active:text-secondary-500 active:font-bold text-[1.1em]'
//             >
//               {item.name}

//               <span
//                 className={`absolute left-0 bottom-0 h-[5px] bg-secondary-500 transition-all duration-300 ease-in-out
//                 ${
//                   selectedPath === item.path
//                     ? 'w-full scale-x-100'
//                     : 'w-0 scale-x-0'
//                 }`}
//               ></span>
//             </Link>
//           ))}
//         </div>

//         <Button className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]'>
//           Admission
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { Button, Image, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import navdata from '../../data/navdata'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false)
  const [selectedPath, setSelectedPath] = useState(location.pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Detect small screens
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowLogo(true)
      } else {
        setShowLogo(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setSelectedPath(location.pathname)
  }, [location.pathname])

  return (
    <div
      className={`z-100 bg-white w-full sticky top-[-10%] shadow-md overflow-hidden `}
    >
      {/* Upper Section */}
      <div
        className={`upper bg-white px-[4%] h-[60px] pt-1.5 flex border-b-3 border-[#f6f7f9]  ${
          isSmallScreen ? 'hidden' : ''
        }'`}
      >
        {/* Logo */}
        <div className='w-14 h-14 mr-5'>
          <Link to='/'>
            <Image src={Logo} />
          </Link>
        </div>

        {/* Hide Name on Small Screens */}
        {!isSmallScreen && (
          <Text className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
            Orogare Technical and Vocational College
          </Text>
        )}

        <Text className='phone text-secondary-500 text-[1.15em] pt-[.6em] ml-auto mr-6'>
          +2547 91964600
        </Text>
      </div>

      {/* Lower Section */}
      <div
        className={`lower bg-white px-[4%] h-[70px] flex items-center justify-between py-2 sticky top-0 z-1000 w-full ${
          isSmallScreen ? 'h-[70px] ' : 'h-[70px]'
        }`}
      >
        {/* Small Logo when Scrolling */}
        <div
          className={`w-14 h-14 pt-1.5 mr-5 transition-transform duration-300 ${
            showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <Link to='/'>
            <Image src={Logo} />
          </Link>
        </div>

        {/* Navigation (Hidden on Small Screens) */}
        {!isSmallScreen ? (
          <div
            className={`nav w-[80%] -ml-[13%] transition-transform duration-300 ${
              showLogo ? 'translate-x-20' : 'translate-x-0'
            }`}
          >
            {navdata.map((item, i) => (
              <Link
                key={i}
                to={`${item.path}`}
                onClick={() => setSelectedPath(item.path)}
                className={`relative nav-path text-text-500 mr-4 pb-3.5 p-2 cursor-pointer text-[1.1em] 
                  ${
                    selectedPath === item.path
                      ? 'border-b-4 border-secondary-500 !text-secondary-500 font-bold'
                      : ''
                  }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[5px] bg-secondary-500 transition-all duration-300 ease-in-out 
                  ${
                    selectedPath === item.path
                      ? 'w-full scale-x-100'
                      : 'w-0 scale-x-0'
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        ) : (
          // Hamburger Menu on Small Screens
          // <Burger
          //   opened={isMenuOpen}
          //   onClick={() => setIsMenuOpen(!isMenuOpen)}
          //   className='text-secondary-500'
          // />

          <MobileNav />
        )}

        {/* <Button className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]'>
          Admission
        </Button> */}

        {!isSmallScreen && (
          <Button className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]'>
            Admission
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isSmallScreen && isMenuOpen && (
        <div className='absolute top-[70px] left-0 w-full bg-white shadow-md p-4 flex flex-col'>
          {navdata.map((item, i) => (
            <Link
              key={i}
              to={`${item.path}`}
              onClick={() => {
                setSelectedPath(item.path)
                setIsMenuOpen(false) // Close menu on selection
              }}
              className={`p-3 text-lg ${
                selectedPath === item.path ? 'text-secondary-500 font-bold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Button, Image, Text, ActionIcon } from '@mantine/core'
// import { IconMenu2 } from '@tabler/icons-react'

// import Logo from '../../assets/logo.svg'
// import navdata from '../../data/navdata'
// import MobileNav from './MobileNav'

// const Navbar = () => {
//   const [showLogo, setShowLogo] = useState(false)
//   const [selectedPath, setSelectedPath] = useState(location.pathname)
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768)

//   useEffect(() => {
//     const handleResize = () => setIsSmallScreen(window.innerWidth <= 768)
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => setShowLogo(window.scrollY > 60)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setSelectedPath(location.pathname)
//   }, [location.pathname])

//   return (
//     <div className='z-100 bg-white w-full sticky top-[-10%] shadow-md overflow-hidden'>
//       <div className='upper bg-white px-[4%] h-[60px] pt-1.5 flex border-b-3 border-[#f6f7f9]'>
//         {!isSmallScreen && (
//           <Text className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
//             Orogare Technical and Vocational College
//           </Text>
//         )}

//         <Text className='phone text-secondary-500 text-[1.15em] pt-[.6em] ml-auto mr-6'>
//           +2547 91964600
//         </Text>
//       </div>

//       <div className='lower bg-white px-[4%] h-[70px] flex items-center justify-between py-2 sticky top-0 z-1000 w-full'>
//         <div className={`w-14 h-14 pt-1.5 mr-5 transition-transform duration-300 ${showLogo ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//           <Link to='/'>
//             <Image src={Logo} />
//           </Link>
//         </div>

//         {!isSmallScreen ? (
//           <div className={`nav w-[80%] -ml-[13%] transition-transform duration-300 ${showLogo ? 'translate-x-20' : 'translate-x-0'}`}>
//             {navdata.map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.name.toLowerCase() === 'home' ? '/' : item.name.toLowerCase() === 'news & announcements' ? '/news-announcements' : `/${item.name.toLowerCase()}`}
//                 onClick={() => setSelectedPath(item.path)}
//                 className={`relative nav-path text-text-500 mr-4 pb-3.5 p-2 cursor-pointer text-[1.1em]
//                   ${selectedPath === item.path ? 'boder-b-4 borer-secondary-500 !text-secondary-500 font-bold' : ''}`}
//               >
//                 {item.name}
//                 <span className={`absolute left-0 bottom-0 h-[5px] bg-secondary-500 transition-all duration-300 ease-in-out ${selectedPath === item.path ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`}></span>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <MobileNav trigger={<ActionIcon variant="subtle" size="lg"><IconMenu2 size={28} /></ActionIcon>} />
//         )}

//         {!isSmallScreen && (
//           <Button className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 w-[10%]'>
//             Admission
//           </Button>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar
