import { Card, Image, Text, Title } from '@mantine/core'
import { FaFutbol, FaUsers } from 'react-icons/fa'
import { GiTennisRacket, GiRugbyConversion, GiHockey } from 'react-icons/gi'

import team from '../../assets/team.png'

const Sport = () => {
  const sports = [
    {
      icon: <FaFutbol />,
      name: 'Football'
    },
    {
      icon: <GiTennisRacket />,
      name: 'Tennis'
    },
    {
      icon: <GiRugbyConversion />,
      name: 'Rugby'
    },
    {
      icon: <GiHockey />,
      name: 'Hockey'
    },
    {
      icon: <FaUsers />,
      name: 'Clubs'
    }
  ]
  return (
    <div className='w-screen h-[130vh] md:h-[120vh] relative '>
      <Image src={team} className='object-cover' />
      <div className='sect text-white absolute top-[52%] z-22 px-[4%] w-[80%]'>
        <Title className='text-[3em] mb-2'>More Than Just Education</Title>
        {/* <Text className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa,
          suscipit alias voluptates ratione at, velit amet ad doloribus sint
          dolore dolores quam mollitia praesentium vero cupiditate atque dolor
          debitis nemo impedit doloremque sed aliquid. Inventore illum hic
          obcaecati aliquam.F
        </Text> */}
        <Text className=''>
          Education goes beyond the classroom. Our institution fosters holistic
          development by encouraging students to engage in sports and
          extracurricular activities. Whether you're passionate about football,
          tennis, rugby, or hockey, or prefer club-based activities, there's
          something for everyone to explore, grow, and excel.
        </Text>
      </div>

      <div className='sp-card px-[4%] flex flex-col md:flex-row justify-between absolute w-full bottom-15'>
        {sports.map((sport, i) => (
          <Card
            key={i}
            className='z-22 py-6 px-6 rounded-lg bg-white md:w-[19.4%] mb-4 flex flex-row items-center  text-secondary-400 '
          >
            <div className='text-[4em] mr-2 self-start'>{sport.icon}</div>
            <div className='text-text-500 font-bold text-[1.4em]'>
              {sport.name}
            </div>
          </Card>
        ))}
      </div>
      {/* <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-primary-400 to-transparent"></div> */}
      <div className='overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[linear-gradient(to_top,#002C35_20%,#002C35_30%,#002C35bf_50%,#002C3500_100%)]'></div>
    </div>
  )
}

export default Sport
