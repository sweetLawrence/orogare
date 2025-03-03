import About from '../components/sections/About'
import Belief from '../components/sections/Belief'
import Courses from '../components/sections/Courses'
import HandsOn from '../components/sections/HandsOn'
import Intakes from '../components/sections/Intakes'
import LandingPage from '../components/sections/LandingPage'
import News from '../components/sections/News'
import Partners from '../components/sections/Partners'
import Sport from '../components/sections/Sport'

const Home = () => {

  return (
    <div className='relative'>
      <LandingPage />
      <About />
      <Belief />
      <HandsOn />
      <Courses />
      <Intakes />
      <Sport />
      <Partners />
      <News />
    </div>
  )
}

export default Home
