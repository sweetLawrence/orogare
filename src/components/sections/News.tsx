import { Button, Card, Image, Text, Title } from '@mantine/core'
import test from '../../assets/gate.png'

const News = () => {
  return (
    <div className='px-[4%] md:h-[70vh] w-full'>
      <Title className='text-secondary-500'>News & announcements</Title>
      <div className='sd flex flex-col md:flex-row items-center justify-between mt-6 '>
        <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md '>
          <Card.Section>
            <Image src={test} className='w-[100%] h-40 object-cover' />
            <Title className='mx-3.5 text-2xl text-secondary-500'>Official opening date</Title>
            <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium odio quaerat voluptas minus dolores.
            </Text>
          </Card.Section>
          <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
        </Card>

        <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md'>
          <Card.Section>
            <Image src={test} className='w-[100%] h-40 object-cover' />
            <Title className='mx-3.5 text-2xl text-secondary-500'>Official opening date</Title>
            <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium odio quaerat voluptas minus dolores.
            </Text>
          </Card.Section>
          <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
        </Card>

        <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md '>
          <Card.Section>
            <Image src={test} className='w-[100%] h-40 object-cover' />
            <Title className='mx-3.5 text-2xl text-secondary-500'>Official opening date</Title>
            <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium odio quaerat voluptas minus dolores.
            </Text>
          </Card.Section>
          <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
        </Card>
      </div>
    </div>
  )
}

export default News
