import { Button, Card, Image, Text, Title } from '@mantine/core'
import Gate from '../../assets/gate.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='px-[4%] w-[100%] h-[75vh]'>
      <Title className='text-secondary-500 mb-10'>About Orogare TVC</Title>

      <div className='flex w-[100%] h-[100%] justify-between b-accent-400'>
        <div className='left w-[40%] h-[100%] b-accent-300'>
          <div className='img relative flex flex-col items-center justify-center'>
            <Card className='absolute bg-secondary-100 top-0 left-4 py-15 px-10'></Card>
            <Image src={Gate} className='w-[80%] z-100 top-10 m-10' />
            <Card className='absolute bg-secondary-100 bottom-0 right-4 py-15 px-10'></Card>
          </div>
        </div>

        <div className='right w-[55%]'>
          <Text className='mb-5 text-text-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            vitae sint modi reprehenderit voluptate, placeat deserunt hic odit
            id culpa fuga porro veritatis libero quia, ducimus voluptatem omnis
            molestias deleniti provident nam numquam cupiditate sed ipsam quos!
            At obcaecati fuga voluptate magni, vitae repudiandae libero numquam
            harum eligendi sit mollitia!
          </Text>

          <Text className='mb-4 text-text-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            provident nemo autem. Numquam doloremque cupiditate soluta sequi
            fuga unde hic nihil voluptas esse modi et quos earum neque dicta,
            autem consequuntur ut quis! Quis asperiores iure sit architecto, vel
            aut est sequi tempore ex, enim a esse quasi maiores dolorum.
          </Text>

          <Link to='/about'>
            <Button
              variant='outline'
              className='border-3 border-secondary-500 w-[20%] h-[3.2em] text-primary-500'
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
