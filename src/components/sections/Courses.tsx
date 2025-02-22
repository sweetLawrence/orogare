import { Button, Image, Text, Title } from '@mantine/core'
import Catapiller from '../../assets/catapiller.png'
import Woman from '../../assets/woman.png'
import Workshop from '../../assets/workshop.png'

const Courses = () => {
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
    <div className='px-[3%] w-screen md:h-[88vh] flex flex-col overflow-hidden'>
      <Title className='text-secondary-500'>Courses & programs</Title>
      {/* <Text className='text-text-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt
        corrupti atque commodi sequi adipisci ad optio praesentium? Dolorum,
        expedita. Odit cupiditate laborum, debitis suscipit in repellendus
        dolore enim doloribus?
      </Text> */}
      <Text className='text-text-500'>
        Our programs are designed to equip students with industry-relevant
        skills, combining hands-on training and theoretical knowledge. Whether
        you are pursuing a <b>diploma, craft, artisan certification</b>, or a{' '}
        <b>short specialized course</b>, our curriculum ensures practical
        competence and career readiness.
      </Text>

      <div className='section flex flex-col md:flex-row justify-between mt-20 -mb-8 md:mb-5'>
        {levels.map((level, i) => (
          <div
            key={i}
            className='bg-primary-800 text-white relative z-10 w-[100%] md:w-[24.5%] flex flex-col items-center justify-center px-3 pt-20 md:pt-10 pb-6 shadow-lg rounded-lg mb-20 md:mb-0 '
          >
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-[70%] !z-20 '>
              <Image src={level.img} className='' />
            </div>

            <Title className='mt-18 mb-1 text-[1.4em] '>{level.title}</Title>
            <Text className='mb-4 w-[100%] h-19'>{level.sometext}</Text>
            <Button
              variant='outline'
              className='w-[50%]  h-11 border-3 border-white text-white rounded-lg'
            >
              See Courses
            </Button>
          </div>
        ))}
      </div>

      <Button
        variant='outline'
        className=' self-center md:w-[15%] h-11 border-3 border-primary-700 text-primary-700 rounded-lg'
      >
        See All Courses
      </Button>
    </div>
  )
}

export default Courses
