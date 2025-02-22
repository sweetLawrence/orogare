import { Image, Title } from '@mantine/core'
import kuccps from '../../assets/logos/kuccps.png'
import psc from '../../assets/logos/psc.png'
import helb from '../../assets/logos/helb.png'
import knec from '../../assets/logos/knec.png'
import tveta from '../../assets/logos/tveta.png'

const Partners = () => {
  const logos = [kuccps, psc, helb, knec, tveta]
  return (
    <div className='px-[4%] mt-10 h-[40vh]'>
     <Title className='text-secondary-500'>Partners</Title>
      <div className='flex flex-wrap items-center justify-between'>
        {logos.map((logo, i) => (
          <Image key={i} src={logo} className='w-[25%] mx-2  md:w-[13%]' />
        ))}
      </div>
    </div>
  )
}

export default Partners
