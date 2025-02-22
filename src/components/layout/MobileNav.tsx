import { Menu, Burger, Button } from '@mantine/core'
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconBuildingBank,
  IconBriefcase,
  IconFileText,
  IconNews
} from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navData = [
  { name: 'Home', path: '/', icon: <IconHome size={14} /> },
  { name: 'About', path: '/about', icon: <IconInfoCircle size={14} /> },
  { name: 'Courses', path: '/courses', icon: <IconBook size={14} /> },
  {
    name: 'Governance',
    path: '/governance',
    icon: <IconBuildingBank size={14} />
  },
  { name: 'Careers', path: '/careers', icon: <IconBriefcase size={14} /> },
  { name: 'Tenders', path: '/tenders', icon: <IconFileText size={14} /> },
  {
    name: 'News & Announcements',
    path: '/news-announcements',
    icon: <IconNews size={14} />
  }
]

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <Menu
      transitionProps={{ transition: 'rotate-right', duration: 150 }}
      onClose={() => setIsMenuOpen(false)}
    >
      <Menu.Target>
        <Burger
          opened={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-secondary-500'
        />
      </Menu.Target>

      <Menu.Dropdown style={{ width: '70vw' }} className=''>
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
        <Button className='ml-[4%] w-[90%] mb-3'>Admission</Button>
      </Menu.Dropdown>
    </Menu>
  )
}

export default MobileNav
