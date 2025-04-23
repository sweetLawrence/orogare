// import { Button, Image, Text, Title } from '@mantine/core'
// import Catapiller from '../../assets/catapiller.png'
// import Woman from '../../assets/woman.png'
// import Workshop from '../../assets/workshop.png'
// import { useNavigate } from 'react-router-dom'

// const Courses = () => {
//   const navigate = useNavigate()
//   const levels = [
//     {
//       img: Catapiller,
//       title: 'Diploma',
//       sometext:
//         'Advanced technical and professional training designed to prepare students for industry and career excellence.'
//     },
//     {
//       img: Woman,
//       title: 'Craft',
//       sometext:
//         'Hands-on programs focusing on practical training and industry-specific expertise for professionals.'
//     },
//     {
//       img: Workshop,
//       title: 'Artisan',
//       sometext:
//         'Specialized training for skilled trades, emphasizing mastery of craftsmanship and technical proficiency.'
//     },
//     {
//       img: Catapiller,
//       title: 'Short Specialized Courses',
//       sometext:
//         'Short, focused courses designed to enhance skills and accelerate career growth.'
//     }
//   ]

//   return (
//     <div className='px-[3%] w-screen h-auto md:h-[88vh] flex flex-col overflow-hidden'>
//       <Title className='text-secondary-500'>Courses & programs</Title>
//       {/* <Text className='text-text-500'>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt
//         corrupti atque commodi sequi adipisci ad optio praesentium? Dolorum,
//         expedita. Odit cupiditate laborum, debitis suscipit in repellendus
//         dolore enim doloribus?
//       </Text> */}
//       <Text className='text-text-500'>
//         Our programs are designed to equip students with industry-relevant
//         skills, combining hands-on training and theoretical knowledge. Whether
//         you are pursuing a <b>diploma, craft, artisan certification</b>, or a{' '}
//         <b>short specialized course</b>, our curriculum ensures practical
//         competence and career readiness.
//       </Text>

//       {/* <div className='section flex flex-col md:flex-row justify-between mt-20 -mb-8 md:mb-5'>
//         {levels.map((level, i) => (
//           <div
//             key={i}
//             className='bg-primary-800 text-white relative z-10 w-[100%] md:w-[24.5%] flex flex-col items-center justify-center px-3 pt-20 md:pt-10 pb-6 shadow-lg rounded-lg mb-20 md:mb-0 '
//           > */}

//       <div className='section flex flex-wrap justify-center md:justify-between gap-20 mt-20 mb-10 bg-acent-400'>
//         {levels.map((level, i) => (
//           <div
//             key={i}
//             className='bg-primary-800 text-white relative z-10
//                  w-full sm:w-[48%] md:w-[32%] lg:w-[20%]
//                  flex flex-col items-center justify-center
//                  px-3 pt-20 pb-6 shadow-lg rounded-lg'
//           >
//             <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-[75%] !z-20  mb-2'>
//               <Image src={level.img} className='' />
//             </div>

//             <Title className='mt-18 mb-1 text-[1.4em] '>{level.title}</Title>
//             <Text className='mb-4 w-[100%] h-19'>{level.sometext}</Text>
//             <Button
//               variant='outline'
//               className='w-[50%]  h-11 border-3 border-white text-white rounded-lg'
//               onClick={() =>
//                 navigate(`/courses?category=${encodeURIComponent(level.title)}`)
//               }
//             >
//               See Courses
//             </Button>
//           </div>
//         ))}
//       </div>

//       <Button
//         variant='outline'
//         className=' self-center md:w-[15%] h-11 border-3 border-primary-700 text-primary-700 rounded-lg'
//         onClick={() => navigate('/courses')}
//       >
//         See All Courses
//       </Button>
//     </div>
//   )
// }

// export default Courses

import { Button, Image, Text, Title } from '@mantine/core'
import Catapiller from '../../assets/catapiller.png'
import Woman from '../../assets/woman.png'
import Workshop from '../../assets/workshop.png'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
  const navigate = useNavigate()

  const levels = [
    {
      img: Catapiller,
      title: 'Diploma',
      sometext:
        'Advanced technical and professional training designed to prepare students for industry and career excellence.'
    },
    {
      img: Woman,
      title: 'Craft',
      sometext:
        'Hands-on programs focusing on practical training and industry-specific expertise for professionals.'
    },
    {
      img: Workshop,
      title: 'Artisan',
      sometext:
        'Specialized training for skilled trades, emphasizing mastery of craftsmanship and technical proficiency.'
    },
    {
      img: Catapiller,
      title: 'Short Specialized Courses',
      sometext:
        'Short, focused courses designed to enhance skills and accelerate career growth.'
    }
  ]

  return (
    <div className='px-[3%] w-full py-10 md:h-auto flex flex-col overflow-hidden'>
      <Title className='text-secondary-500 mb-2'>Courses & programs</Title>

      <Text className='text-text-500 max-w-5xl'>
        Our programs are designed to equip students with industry-relevant
        skills, combining hands-on training and theoretical knowledge. Whether
        you are pursuing a <b>diploma, craft, artisan certification</b>, or a{' '}
        <b>short specialized course</b>, our curriculum ensures practical
        competence and career readiness.
      </Text>

      <div className='section flex flex-wrap justify-center md:justify-between gap-20 md:gap-16 lg:gap-8 mt-16 mb-10'>
        {levels.map((level, i) => (
          <div
            key={i}
            className='bg-primary-800 text-white relative z-10 
              w-full sm:w-[60%] md:w-[40%] lg:w-[22.9%] 
              flex flex-col items-center justify-between 
              px-4 pt-20 pb-6 shadow-lg rounded-xl
              transition-all duration-300 hover:scale-105'
          >
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-[75%] z-20'>
              <Image src={level.img} />
            </div>

            <Title
              order={3}
              className='mt-22 md:mt-11 mb-2 text-center text-[1.3em]'
            >
              {level.title}
            </Title>
            <Text className='mb-4 text-center'>{level.sometext}</Text>
            <Button
              variant='outline'
              className='w-[60%] h-11 border-2 border-white text-white rounded-lg mt-auto'
              onClick={() =>
                navigate(`/courses?category=${encodeURIComponent(level.title)}`)
              }
            >
              See Courses
            </Button>
          </div>
        ))}
      </div>

      <Button
        variant='outline'
        className='self-center w-[60%] md:w-[20%] h-11 border-2 border-primary-700 text-primary-700 rounded-lg'
        onClick={() => navigate('/courses')}
      >
        See All Courses
      </Button>
    </div>
  )
}

export default Courses
