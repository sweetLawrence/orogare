import About from '../components/sections/About'
import Belief from '../components/sections/Belief'
import Courses from '../components/sections/Courses'
import HandsOn from '../components/sections/HandsOn'
import Intakes from '../components/sections/Intakes'
import LandingPage from '../components/sections/LandingPage'
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
    </div>
  )
}

export default Home
