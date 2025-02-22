import { Button, Image, Text, Title } from '@mantine/core'
import Catapiller from '../../assets/catapiller.png'
import Woman from '../../assets/woman.png'
import Workshop from '../../assets/workshop.png'

const Courses = () => {
  const levels = [
    {
      img: Catapiller,
      title: 'Diploma',
      sometext: 'Donec a nulla lorem. Fusce ut diam ac sem ullamcorper viverra'
    },
    {
      img: Woman,
      title: 'Diploma',
      sometext: 'Donec a nulla lorem. Fusce ut diam ac sem ullamcorper viverra'
    },
    {
      img: Workshop,
      title: 'Diploma',
      sometext: 'Donec a nulla lorem. Fusce ut diam ac sem ullamcorper viverra'
    },
    {
      img: Catapiller,
      title: 'Diploma',
      sometext: 'Donec a nulla lorem. Fusce ut diam ac sem ullamcorper viverra'
    }
  ]
  return (
    <div className='px-[4%] h-[75vh]'>
      <Title className='text-secondary-500'>Courses & programs</Title>
      <Text className='text-text-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt
        corrupti atque commodi sequi adipisci ad optio praesentium? Dolorum,
        expedita. Odit cupiditate laborum, debitis suscipit in repellendus
        dolore enim doloribus?
      </Text>

      <div className='section flex flex-row justify-between mt-20'>
        {levels.map((level, i) => (
          //   <Card
          //     key={i}
          //     className='z-9 w-[24%] flex flex-col items-center justify-center'
          //   >
          //     <div className='-mt-[10%]'>
          //       <Image src={level.img} className='z-10' />
          //     </div>

          <div
            key={i}
            className='bg-primary-800 text-white relative z-10 w-[24%] flex flex-col items-center justify-center px-3 pt-10 pb-6 shadow-lg rounded-lg '
          >
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-[70%] !z-20 '>
              <Image src={level.img} className='' />
            </div>

            <Title className='mt-14 text-3xl'>{level.title}</Title>
            <Text className='mb-4 w-[80%]'>{level.sometext}</Text>
            <Button variant="outline" className='w-[60%] h-11 border-3 border-white text-white rounded-lg'>See Courses</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
