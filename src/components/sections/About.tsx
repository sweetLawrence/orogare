import { Button, Card, Image, Text, Title } from '@mantine/core'
import Gate from '../../assets/gate.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    // <div className='px-[4%] w-[100%] h-[100vh] md:h-[75vh] mb-30 md:mb-0'>
    <div className='px-[4%] w-[100%] h-auto mb-10 md:mb-5'>
      <Title className='text-secondary-500 mb-10'>About Orogare TVC</Title>

      <div className='flex flex-col md:flex-row w-[100%] h-[100%] justify-between b-accent-400'>
        <div className='left w-full md:w-[40%] h-[100%] b-accent-300'>
          <div className='img relative flex flex-col items-center justify-center'>
            <Card className='absolute bg-secondary-100 top-0 left-4 py-15 px-10'></Card>
            <Image src={Gate} className='w-[80%] z-10 top-10 m-10' />
            <Card className='absolute bg-secondary-100 bottom-0 right-4 py-15 px-10'></Card>
          </div>
        </div>

        <div className='right w-full md:w-[55%]'>
          <Title className='text-primary-800 mb-[.1em] text-2xl'>
            Who We Are
          </Title>
          <Text className='mb-5 text-text-500'>
            Orogare Technical and Vocational College (Orogare TVC) was
            established to provide quality, accessible, and industry-driven
            technical training in line with Kenya’s Vision 2030 and the TVET
            Act, 2013. Located in the serene and ambient region of Bassi and
            Masige, Kisii County, the institute offers a holistic learning
            environment that nurtures both academic excellence and
            extracurricular talent.
          </Text>

          <Title className='text-primary-800 mb-[.1em] text-2xl'>
            Our Journey
          </Title>
          <Text className='mb-4 text-text-500'>
            The idea of establishing a technical institute in this region was
            conceived in 2018, with the goal of equipping residents with
            practical skills, business opportunities, and sustainable
            employment. In 2021, Orogare TVC was officially registered under
            Section 20(1) of the TVET Act, 2013, marking the beginning of its
            mission to produce a highly skilled workforce.
          </Text>

          <Link to='/about'>
            <Button
              variant='outline'
              className='border-3 border-secondary-500 md:w-[20%] h-[3.2em] text-primary-500'
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
