import { Image, Text, Title } from '@mantine/core'
import Handson from '../../assets/handson.png'

const HandsOn = () => {
  return (
    <div className='w-screen h-screen relative'>
      <Image src={Handson} className='w-[100%] object-cover' />

      <div className=' w-[75%] absolute bottom-[35%] left-[4%]'>
        <Title className='text-white text-[3em]'>
          Hands-on practice ready for the real world
        </Title>
        <Text className='text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          nihil quibusdam quas voluptate aliquid excepturi, delectus commodi
          consequatur. Earum, illo minima! Obcaecati dolore laboriosam
          temporibus ducimus voluptates amet placeat omnis eveniet incidunt?
          Eius optio odio inventore officia ab cupiditate distinctio.
        </Text>
      </div>
    </div>
  )
}

export default HandsOn
