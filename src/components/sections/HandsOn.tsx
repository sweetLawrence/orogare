import { Image, Text, Title } from '@mantine/core'
import Handson from '../../assets/handson.png'
import HandsonBlur from '../../assets/handson-min.png'
import { useState } from 'react'

const HandsOn = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className='w-[100%] h-[92vh] relative mb-5 overflow-x-hidden'>
      <Image
        src={HandsonBlur}
        alt='Blurred'
        className='absolute top-0 right-0 w-[80%] h-full object-cover mix-blend-multiply scale-105 blur-md transition-opacity duration-500'
        style={{ opacity: loaded ? 0 : 1 }}
      />

      <Image
        src={Handson }
        alt='HandsOn'
        className='h-[100%] object-cover brightness-90'
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
      {/* <Image src={Handson} className='h-[100%] object-cover brightness-90' /> */}

      {/* <div className=' w-[75%] absolute bottom-[20%] left-[4%]'> */}
      <div className=' w-[100%] md:w-[75%] absolute bottom-[5%] md:bottom-[20%] left-[4%]'>
        {/* <Title className='text-white text-[3em]'> */}
        <Title className='text-white text-[1.9em] md:text-[3em]'>
          Hands-on practice ready for the real world
        </Title>

        <Text className='text-white '>
          Gain hands-on experience through practical training designed to equip
          you with the skills needed in the real world. Our programs focus on
          experiential learning to ensure you are job-ready from day one.
        </Text>
      </div>
    </div>
  )
}

export default HandsOn
