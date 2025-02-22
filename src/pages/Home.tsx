import About from '../components/sections/About'
import Belief from '../components/sections/Belief'
import LandingPage from '../components/sections/LandingPage'

const Home = () => {
  return (
    <div className='relative'>
      <LandingPage />
      <About />
      <Belief />
    </div>
  )
}

export default Home
