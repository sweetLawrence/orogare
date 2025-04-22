import { Image, List, Text, Title, ThemeIcon } from '@mantine/core'
import Admin from '../assets/adminblock.png'
import LOGO from '../assets/logo.svg'
import { useMediaQuery } from '@mantine/hooks'

import { TbCircleCheck, TbTools } from 'react-icons/tb'

import { Link } from 'react-router-dom'

const AboutPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  const facts = [
    {
      fig: '2500+',
      text: 'Students'
    },
    // {
    //   fig: '5000+',
    //   text: 'Graduands'
    // },
  
    {
      fig: '50',
      text: 'Programs'
    },
    {
      fig: '80',
      text: 'Trainers',
      hasLeftBorder: true
    }
  ]
  return (
    <div className='min-h-[100vh]'>
      <div className='upper relative mt-[19%] md:-mt-[5%]'>
        <Image src={Admin} className='object-cover h-[50vh] md:h-auto' />

        {isSmallScreen ? (
          <div className='absolute top-15 left-[37%] left w-[100px] mr-2.5'>
            <Link to='/'>
              <Image src={LOGO} className='w-full mb-3' />
            </Link>
          </div>
        ) : (
          <div className='mcrd flex flex-col md:flex-row px-2 absolute top-4 left-0 md:top-[15%] md:pl-10 '>
            <div className='left w-[100px] mr-2.5'>
              <Link to='/'>
                <Image src={LOGO} className='w-full mb-3' />
              </Link>
            </div>
            <div className='right text-white pl-3'>
              <Title>Orogare Technical and Vocational College</Title>
              <Title className='text-[.9em] mb-5'>Ufundi ni maisha</Title>

              <Text>Location: Orogare, Kisii</Text>
            </div>
          </div>
        )}

        <div className='fcts absolute bottom-[1%] md:bottom-[10%]  md:px-2 text-white w-full'>
          <Title className='text-3xl mb-2 pl-2 md:pl-10'>Quick Facts</Title>
          
          {/* TODO */}
          <div className='x flex flex-row  md:w-[0%] justify-between bg-Accent-300 px-2 md:pl-10'>
            {facts.map((fact, i) => (
              <div
                key={i}
                className={`y border-l-2 border-white px-2 md:px-3 ${
                  fact.hasLeftBorder ? 'border-r-2' : ''
                }
          
                `}
              >
                <h2 className='text-[1.6em] md:text-[2em] mb-3 font-bold'>
                  {fact.fig}
                </h2>
                <p className='md:text-[1em]'>{fact.text}</p>
              </div>
            ))}
          </div>{' '}
          {/* TODO */}
        </div>
      </div>

      <div className='lower px-4 md:px-14'>
        <div className='right w-full md:w-[100%]'>
          <Title className='text-primary-800 mb-[.1em] mt-3 text-2xl '>
            Who We Are
          </Title>
          <Text className='mb-5 text-text-500'>
            Orogare Technical and Vocational College (Orogare TVC) was
            established to provide{' '}
            <span className='font-bold'>
              quality, accessible, and industry-driven technical training
            </span>{' '}
            in line with Kenya’s <span className='font-bold'>Vision 2030</span>{' '}
            and the <span className='font-bold'>TVET Act, 2013</span>. Located
            in the serene and ambient region of{' '}
            <span className='font-bold'>Bassi and Masige, Kisii County.</span>{' '}
            The institute offers a holistic learning environment that nurtures
            both academic excellence and extracurricular talent.
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

          <Title className='text-primary-800 mb-[.1em] text-2xl'>
            Our Programs
          </Title>
          <Text className='mb-4 text-text-500'>
            Following a market-driven survey, Orogare TVC developed a
            competency-based training (CBET) curriculum, ensuring graduates meet
            industry standards. The institute offers diverse programs under{' '}
            <span className='font-bold'>
              six admitting departments and one extracurricular department:
            </span>
          </Text>

          <List
            spacing='md'
            size='sm'
            center
            icon={
              <ThemeIcon color='teal' size={24} radius='xl'>
                {/* <IconCircleCheck size={16} /> */}
                {/* <IconTools size={16} /> */}
                <TbTools size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Building and Civil Engineering</List.Item>
            <List.Item>Electrical and Electronics Engineering</List.Item>
            <List.Item>Information and Communication Technology</List.Item>
            <List.Item>Fashion and Design (Institution Management)</List.Item>
            <List.Item>Hospitality Services (Food & Beverages)</List.Item>
            <List.Item>Business and Entrepreneurship Studies</List.Item>
            <List.Item>Sports and Recreation</List.Item>
          </List>

          <Text className='mb-4 text-text-500 mt-4'>
            Our training aligns with Kenya’s economic development goals,{' '}
            <span className='font-bold'>
              the United Nations Sustainable Development Goals (SDGs), and the
              African Union’s Agenda 2063,
            </span>{' '}
            all aimed at promoting innovation, gender inclusivity, and
            sustainable growth.
          </Text>

          <Title className='text-primary-800 mb-3  text-2xl '>
            Why Choose Orogare TVC?
          </Title>

          <List
            spacing='md'
            className='mb-4'
            size='sm'
            center
            icon={
              <ThemeIcon color='teal' size={24} radius='xl'>
                {/* <IconCircleCheck size={16} /> */}
                <TbCircleCheck size={16}/>
              </ThemeIcon>
            }
          >
            <List.Item>
              <span className='font-bold text-secondary-500'>
                Industry-Aligned Training
              </span>{' '}
              – Our CBET approach ensures students gain practical skills
              relevant to the job market.
            </List.Item>
            <List.Item>
              <span className='font-bold text-secondary-500'>
                Serene Learning Environment
              </span>{' '}
              – Our natural surroundings provide a peaceful atmosphere for
              academic and personal growth.
            </List.Item>
            <List.Item>
              <span className='font-bold text-secondary-500'>
                Talent Development
              </span>{' '}
              – We offer a vibrant extracurricular program, including athletics,
              ball games, and performing arts, to help students discover and
              nurture their talents.
            </List.Item>
            <List.Item>
              <span className='font-bold text-secondary-500'>
                Commitment to Excellence
              </span>{' '}
              – We continuously improve our curriculum and infrastructure to
              remain a leader in technical education.
            </List.Item>
          </List>

          <Title className='text-primary-800 mb-[.1em] text-2xl'>
            Our Vision for the Future
          </Title>
          <Text className='mb-4 text-text-500'>
            Orogare TVC is committed to expanding structurally and spiritually,
            ensuring continuous improvement in all fields. Our graduates are
            equipped to drive Kenya’s economic transformation, shaping the
            future of the workforce with skill, innovation, and determination.
          </Text>
        </div>
      </div>
      {/* 
      <div className='video my-2.5 bg-ed-200 flex align-center justify-center'>
        <iframe
          width='740'
          height='416'
          src='https://www.youtube.com/embed/ZIdTELdtHHw'
          title='OROGARE TVC Team presentation at Tabaka Kisii County During #Egesa Career Clinic'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div> */}

      {/* <div className='relative w-full pb-[56.25%] my-2.5 flex justify-center bg-gray-200'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/ZIdTELdtHHw'
          title='OROGARE TVC Team presentation at Tabaka Kisii County During #Egesa Career Clinic'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div> */}

      <div className='relative w-full pb-[56.25%] md:pb-[43%] my-2.5 flex justify-center bg-gray-200'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/ZIdTELdtHHw'
          title='OROGARE TVC Team presentation at Tabaka Kisii County During #Egesa Career Clinic'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default AboutPage
