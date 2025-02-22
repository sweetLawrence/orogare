import About from '../components/sections/About'
import Belief from '../components/sections/Belief'
import HandsOn from '../components/sections/HandsOn'
import LandingPage from '../components/sections/LandingPage'

const Home = () => {
  return (
    <div className='relative'>
      <LandingPage />
      <About />
      <Belief />
      <HandsOn />
    </div>
  )
}

export default Home
