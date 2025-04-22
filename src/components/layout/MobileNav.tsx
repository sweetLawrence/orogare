import { Menu, Burger, Button, Image } from '@mantine/core'
import {
  TbHome,
  TbInfoCircle,
  TbBook,
  TbBuildingBank,
  TbBriefcase,
  TbFileText,
  TbNews
} from 'react-icons/tb'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../../assets/logo.svg'

const navData = [
  { name: 'Home', path: '/', icon: <TbHome size={14} /> },
  { name: 'About', path: '/about', icon: <TbInfoCircle size={14} /> },
  { name: 'Courses', path: '/courses', icon: <TbBook size={14} /> },
  {
    name: 'Governance',
    path: '/governance',
    icon: <TbBuildingBank size={14} />
  },
  { name: 'Careers', path: '/careers', icon: <TbBriefcase size={14} /> },
  { name: 'Tenders', path: '/tenders', icon: <TbFileText size={14} /> },
  {
    name: 'News & Announcements',
    path: '/news-announcements',
    icon: <TbNews size={14} />
  }
]

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='z-100 py-2 px-[4%] fixed top-0 flex bg-white w-full justify-between'>
      <div className='logo'>
        <Link to='/'>
          <Image src={LOGO} alt='Orogare Logo' />
        </Link>
      </div>
      <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }} onClose={() => setIsMenuOpen(false)}>
        <Menu.Target>
          <Burger
            opened={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            color={'#00b4d8'}
            size={40}
          />
        </Menu.Target>

        <Menu.Dropdown style={{ width: '70vw' }}>
          <Menu.Label>Navigation</Menu.Label>
          {navData.map(item => (
            <Menu.Item
              key={item.path}
              leftSection={item.icon}
              className='bg-accet-200 py-3 text-[1.1em]'
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </Menu.Item>
          ))}
          <Button 
          onClick={()=> navigate('/admissions')}
          className='ml-[4%] w-[90%] mb-3 bg-gradient-to-r from-secondary-400 to-primary-500'>
            Admission
          </Button>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default MobileNav

