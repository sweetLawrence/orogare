import { Card, Image } from '@mantine/core'
import School from '../../assets/school-lp.png'

const LandingPage = () => {
  const stats = [
    { num: '5+', text: 'Graduations' ,color:'bg-primary-800'},
    { num: '300+', text: 'Students',color:'bg-primary-700' },
    { num: '3', text: 'Accreditations',color:'bg-primary-600' }
  ]

  return (
    <div className='z-10 w-[100%] bg-[#002C35] h-[100vh] -mt-[110px] overflow-hidden relative mb-20'>
      <div className='absolute top-0 right-0 w-[75%] h-[100%]'>
        <Image src={School} className='object-contain -mt-[25%]' />
      </div>

      {/* <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-r from-primary-900 to-transparent"> */}
      <div className='overlay absolute top-0 left-0 w-[70%] h-full bg-gradient-to-tr from-[#002C35] via-primary-900/60 to-transparent'></div>

      <div className='text-card absolute left-0 bottom-50 w-[40%] h-[260px] bg-accent-100 mx-[4%]'>Discover</div>

      <div className='stats absolute bottom-0 left-0 flex px-[4%]'>
        {stats.map((stat, i) => (
          <div key={i} className={`x flex flex-col text-white font-bold  justify-center px-4 w-[160px] h-[120px] ${stat.color}`}>
            <div className='u text-[2em]'>{stat.num}</div>
            <div className='l text-[1.1em]'>{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingPage
