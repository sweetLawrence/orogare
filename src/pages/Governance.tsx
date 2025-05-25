// import React, { useState } from 'react';
// import { Card, Image, Text, Tabs } from '@mantine/core';
// import { FaUsers, FaUserTie, FaUserFriends } from 'react-icons/fa';
// import clsx from 'clsx';
// import H from '../assets/adminblock.png'

// type Member = {
//   name: string;
//   title: string;
//   image: string;
// };

// const boardMembers: Member[] = [
//   { name: 'John Doe', title: 'Board Chairperson', image: H },
//   { name: 'Jane Smith', title: 'Board Secretary', image: '/images/jane.jpg' },
// ];

// const admins: Member[] = [
//   { name: 'Dr. Alice M.', title: 'Principal', image: '/images/alice.jpg' },
//   { name: 'Mr. Bob K.', title: 'Deputy Principal', image: '/images/bob.jpg' },
// ];

// const staff: Member[] = [
//   { name: 'Grace W.', title: 'Registrar', image: '/images/grace.jpg' },
//   { name: 'Tom N.', title: 'Accountant', image: '/images/tom.jpg' },
// ];

// const Governance: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('board');

//   const members = {
//     board: boardMembers,
//     admins,
//     staff,
//   }[activeTab];

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">College Governance</h1>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab('board')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center gap-2 border',
//             activeTab === 'board'
//               ? 'bg-blue-600 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUsers /> Board Members
//         </button>
//         <button
//           onClick={() => setActiveTab('admins')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center gap-2 border',
//             activeTab === 'admins'
//               ? 'bg-blue-600 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUserTie /> Admins
//         </button>
//         <button
//           onClick={() => setActiveTab('staff')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center gap-2 border',
//             activeTab === 'staff'
//               ? 'bg-blue-600 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUserFriends /> Staff
//         </button>
//       </div>

//       {/* Members Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {members?.map((member, idx) => (
//           <Card key={idx} shadow="md" radius="md" padding="lg" withBorder className="text-center">
//             <Image src={member.image} height={160} alt={member.name} radius="md" className="object-cover mx-auto" />
//             <Text size="lg" mt="md">
//               {member.name}
//             </Text>
//             <Text color="dimmed" size="sm">
//               {member.title}
//             </Text>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Governance;

// import React, { useState } from 'react'
// import { Card, Image, Text } from '@mantine/core'
// import { FaUsers, FaUserTie, FaUserFriends } from 'react-icons/fa'
// import clsx from 'clsx'
// import Chair from '../assets/Governance/Board/chair.webp'
// import Secretary from '../assets/Governance/Board/secretary.webp'
// import DPrincipal from '../assets/Governance/Admin/dp-principal.webp'
// import Registrar from '../assets/Governance/Admin/registrar.webp'
// import Dean from '../assets/Governance/Admin/dean.webp'

// type Member = {
//   name: string
//   title: string
//   image: string
// }

// const boardMembers: Member[] = [
//   { name: 'Mr. Isaac Ombati', title: 'BOG Chair', image: Chair },
//   { name: 'Mr. Robinson Kambi', title: 'Board Secretary', image: Secretary }
// ]

// const admins: Member[] = [
//   { name: 'Mr. Robinson Kambi', title: 'Principal', image: Secretary },
//   { name: 'Mrs. Mutai Chepkoech Gladys', title: 'Deputy Principal', image: DPrincipal },
//     { name: 'Mr. Shadrack Kibet Chepkwony', title: 'Registrar', image: Registrar },
//     { name: 'Mrs. Ann Kemunto Iyoga', title: 'Dean of Students', image: Dean },
// ]

// const staff: Member[] = [
// //   { name: 'Grace W.', title: 'Registrar', image: '/images/grace.jpg' },
// //   { name: 'Tom N.', title: 'Accountant', image: '/images/tom.jpg' }
// ]

// const GovernancePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('board')

//   const members = {
//     board: boardMembers,
//     admins,
//     staff
//   }[activeTab]

//   return (
//     <div className='p-4 max-w-6xl mx-auto mt-20 md:mt-0'>
//       <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6'>
//         College Governance
//       </h1>

//       {/* Navigation Tabs */}
//       <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6'>
//         <button
//           onClick={() => setActiveTab('board')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
//             activeTab === 'board'
//               ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUsers /> Board
//         </button>
//         <button
//           onClick={() => setActiveTab('admins')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
//             activeTab === 'admins'
//               ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUserTie /> Admins
//         </button>
//         <button
//           onClick={() => setActiveTab('staff')}
//           className={clsx(
//             'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
//             activeTab === 'staff'
//               ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           )}
//         >
//           <FaUserFriends /> Staff
//         </button>
//       </div>

//       {/* Members Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
//         {members?.map((member, idx) => (
//           <Card
//             key={idx}
//             shadow='sm'
//             radius='md'
//             padding='md'
//             withBorder
//             className='text-center '
//           >
//             <div className='w-32 h-32 mx-auto rounded-md overflow-hidden'>
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 className='w-full object-contain'
//               />
//             </div>

//             <Text size='lg' mt='md'>
//               {member.name}
//             </Text>
//             <Text color='dimmed' size='sm'>
//               {member.title}
//             </Text>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default GovernancePage

import React, {  } from 'react'
import { Card, Image, Text } from '@mantine/core'
import { FaUsers, FaUserTie, FaUserFriends } from 'react-icons/fa'
import clsx from 'clsx'
import { useSearchParams } from 'react-router-dom'

// your images
// import Chair from '../assets/Governance/Board/chair.webp'
import Secretary from '../assets/Governance/Board/secretary.webp'
import DPrincipal from '../assets/Governance/Admin/dp-principal.webp'
import Registrar from '../assets/Governance/Admin/registrar.webp'
import Dean from '../assets/Governance/Admin/dean.webp'

import M from '../assets/Governance/Admin/m-dummy.webp'
import F from '../assets/Governance/Admin/f-dummy.webp'

type Member = {
  name: string
  title: string
  image: string
}

const boardMembers: Member[] = [
  { name: 'Mr. Jared Oteyo', title: 'BOG Chair', image: M },
  { name: 'Mr. Robinson Kambi', title: 'Board Secretary', image: Secretary }
]

const admins: Member[] = [
  { name: 'Mr. Robinson Kambi', title: 'Principal', image: Secretary },
  {
    name: 'Mrs. Jane Obiria',
    title: 'Deputy Principal Administration',
    image: F
  },
  {
    name: 'Mrs. Mutai Chepkoech Gladys',
    title: 'Deputy Principal Academics',
    image: DPrincipal
  },
  {
    name: 'Mr. Shadrack Kibet Chepkwony',
    title: 'Registrar',
    image: Registrar
  },
  { name: 'Mrs. Ann Kemunto Iyoga', title: 'Dean of Students', image: Dean },
  { name: 'Mr. Enosh Akama', title: 'Examination Officer', image: M }
]

const staff: Member[] = []

const GovernancePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'board'

  const members = {
    board: boardMembers,
    admins,
    staff
  }[tab]

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab })
  }

  return (
    <div className='p-4 max-w-6xl mx-auto mt-20 md:mt-0'>
      <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6'>
        College Governance
      </h1>

      {/* Navigation Tabs */}
      <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6'>
        <button
          onClick={() => handleTabChange('board')}
          className={clsx(
            'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
            tab === 'board'
              ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          )}
        >
          <FaUsers /> Board
        </button>
        <button
          onClick={() => handleTabChange('admins')}
          className={clsx(
            'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
            tab === 'admins'
              ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          )}
        >
          <FaUserTie /> Admins
        </button>
        <button
          onClick={() => handleTabChange('staff')}
          className={clsx(
            'px-4 py-2 rounded-full flex items-center justify-center gap-2 border text-sm sm:text-base',
            tab === 'staff'
              ? 'bg-gradient-to-r from-secondary-400 to-primary-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          )}
        >
          <FaUserFriends /> Staff
        </button>
      </div>

      {/* Members Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {members?.map((member, idx) => (
          <Card
            key={idx}
            shadow="sm"
            radius="md"
            padding="md"
            withBorder
            className="text-center"
          >
            <div className="w-full h-40 overflow-hidden rounded-md">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <Text size="lg" mt="md">
                {member.name}
              </Text>
              <Text color="dimmed" size="sm">
                {member.title}
              </Text>
            </div>
          </Card>
        ))}
      </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {members?.map((member, idx) => (
          <Card
            key={idx}
            shadow='sm'
            radius='md'
            padding='md'
            withBorder
            className='text-center '
          >
            <div className='w-32 h-32 mx-auto rounded-md overflow-hidden'>
              <Image
                src={member.image}
                alt={member.name}
                className='w-full object-contain'
              />
            </div>

            <Text size='lg' mt='md'>
              {member.name}
            </Text>
            <Text color='dimmed' size='sm'>
              {member.title}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default GovernancePage
