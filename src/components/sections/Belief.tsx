import { Card, Group, Text, Title } from '@mantine/core'
import { FaBinoculars, FaBullseye, FaHandHoldingHeart } from 'react-icons/fa'

const Belief = () => {
  const cards = [
    {
      icon: <FaBinoculars className='text-5xl text-secondary-400'/>,
      title: 'Vision',
      text: 'convallis non eu odio. Quisque at tellus sollicitudin dui '
    },
    {
      icon: <FaBullseye className='text-5xl text-secondary-400'/>,
      title: 'Vision',
      text: 'convallis non eu odio. Quisque at tellus sollicitudin dui '
    },
    {
      icon: <FaHandHoldingHeart className='text-5xl text-secondary-400'/>,
      title: 'Vision',
      text: 'convallis non eu odio. Quisque at tellus sollicitudin dui '
    }
  ]
  return (
    <div className='px-[4%] w-[100%] h-[70vh] bg-back-500'>
      <Title className='text-secondary-500 mb-6'>Our belief system</Title>
      <div className='cs flex justify-between'>

        {cards.map((card, i) => (
        //   <Card key={i} className=' bg-white  w-[32%] '>
        <Card key={i} className='bg-white flex flex-row items-center !justify-between py-7 px-8 w-[32%] shadow-lg rounded-lg'>
              <div className='l w-[20%]  shadow-sm rounded-lg shadow-secondary-400 shadow- flex items-center justify-center p-3'>{card.icon}</div>
              <div className='r w-[75%] text-secondary-500'>
                <Title className='text-3xl'>{card.title}</Title>
                <Text>{card.text}</Text>
              </div>
            
          </Card>
        ))}

      </div>
    </div>
  )
}

export default Belief
