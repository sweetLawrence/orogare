// import { Image } from '@mantine/core'
// import School from '../../assets/school-lp.png'

// const LandingPage = () => {
//   const stats = [
//     { num: '5+', text: 'Graduations' ,color:'bg-primary-800'},
//     { num: '300+', text: 'Students',color:'bg-primary-700' },
//     { num: '3', text: 'Accreditations',color:'bg-primary-600' }
//   ]

//   return (
//     // <div className='z-10 w-[100%] bg-[#002C35] h-[100vh] -mt-[110px] overflow-hidden relative mb-20'>
//     <div className='z-10 w-[100%] h-[100vh] -mt-[110px] overflow-hidden relative mb-20'>
//       <div className='absolute top-0 right-0 w-[75%] h-[100%]'>
//         <Image src={School} className='object-contain -mt-[25%] mix-blend-multiply' />
//       </div>

//       {/* <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-r from-primary-900 to-transparent"> */}
//       {/* <div className='overlay absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#002C35] via-primary-900/60 to-transparent'></div> */}
//       <div className='overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-950 via-primary-950/70 to-transparent'></div>

//       {/* <div className='text-card absolute left-0 bottom-50 w-[40%] h-[260px] bg-accent-100 mx-[4%]'>Discover</div> */}

//       <div className='stats absolute bottom-0 left-0 flex px-[4%]'>
//         {stats.map((stat, i) => (
//           <div key={i} className={`x flex flex-col text-white font-bold  justify-center px-4 w-[160px] h-[120px] ${stat.color}`}>
//             <div className='u text-[2em]'>{stat.num}</div>
//             <div className='l text-[1.1em]'>{stat.text}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default LandingPage

import { Button, Image, Text, Title } from '@mantine/core'
import School from '../../assets/school-lp.png'
import SchoolBlur from '../../assets/school-lp-min.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)
  const stats = [
    { num: '5+', text: 'Graduations', color: 'bg-primary-800' },
    { num: '300+', text: 'Students', color: 'bg-primary-700' },
    { num: '3', text: 'Accreditations', color: 'bg-primary-600' }
  ]

  return (
    // <div className='z-10 w-[100%] h-[110vh] -mt-[110px] overflow-hidden relative mb-10'>
    <div className='z-10 w-[100%] h-[96vh] md:h-[110vh] -mt-[110px] overflow-hidden relative mb-10'>
      <div className='absolute top-0 right-0 w-[80%] h-[100%]'>
        {/* <Image
          src={School}
          className='object-contain -mt-[25%] mix-blend-multiply'
        /> */}

        <Image
          src={SchoolBlur}
          alt='Blurred'
          className='absolute top-0 right-0 w-[80%] h-full object-cover mix-blend-multiply scale-105 blur-md transition-opacity duration-500'
          style={{ opacity: loaded ? 0 : 1 }}
        />

        <Image
          src={School}
          alt='School'
           className='object-cover h-[100%] md:mt-[7%] mix-blend-multiply'
          // className='absolute top-0 right-0 w-[80%] h-full object-cover mix-blend-multiply transition-opacity duration-700 ease-in-out'
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
        />

        {/* <Image
          src={School}
          className='object-cover h-[100%] md:mt-[7%] mix-blend-multiply'
        /> */}
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#002C35_20%,#002C35_30%,#002C35bf_50%,#002C3500_100%)]'></div>

      {/* <div className='text-card absolute left-0 bottom-55 w-[50%] h-[260px] mx-[4%]'> */}
      <div className='text-card absolute left-0 bottom-30 md:bottom-55 md:w-[50%] h-[260px] mx-[4%]'>
        {/* <Title className='text-white text-[4em] mb-1 font-sans'>
          DISCOVER, LEARN, INNOVATE
        </Title> */}

        <Title className='text-white md:text-[4em] mb-1 font-sans'>
          DISCOVER, LEARN, INNOVATE
        </Title>

        <Text className='text-white mb-3'>
          Join a vibrant learning community that fosters innovation, academic
          excellence, and holistic growth. Explore endless opportunities to
          excel and shape your future with us.
        </Text>

        <Button
          onClick={() => navigate('/admissions')}
          className='bg-gradient-to-r from-secondary-400 to-primary-500 mr-6 md:w-[23%] h-11'
        >
          Admission
        </Button>
      </div>

      <div className='stats absolute bottom-0 left-0 flex px-[4%]'>
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`x flex flex-col text-white font-bold justify-center px-4 w-[110px] h-[100px] md:w-[160px] md:h-[120px] ${stat.color}`}
          >
            <div className='u text-[2em]'>{stat.num}</div>
            <div className='l text-[.8em] md:text-[1.1em]'>{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingPage
