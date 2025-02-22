import { Card, Image, Text, Title } from '@mantine/core'
import Logo from '../../assets/logo.svg'
import navdata from '../../data/navdata'
import {
  FaPhoneAlt,
  FaHome,
  FaTwitter,
  FaEnvelope,
  FaFacebook
} from 'react-icons/fa'

const Footer = () => {
  const current_date = new Date().getFullYear()

  const contacts = [
    { icon: <FaPhoneAlt />, text: '0791964600' },
    { icon: <FaHome />, text: 'P.O BOX 356-40204, OGEMBO' },
    { icon: <FaTwitter />, text: '@Orogare_TVC' }, // Twitter/X
    { icon: <FaEnvelope />, text: 'orogaretvc@gmail.com' },
    { icon: <FaFacebook />, text: '@Orogare_TVC' } // Facebook
  ]
  return (
    <div className='flex justify-between items-start py-10 pt-20 px-[4%] bg-primary-900 text-white'>
      <div className='w-[25%]'>
        <Title className='text-2xl mb-2'>
          Orogare Technical & Vocational College
        </Title>
        <Text className='italic text-[1.1em] font-bold'>Ufundi ni maisha</Text>
        <Card className='w-[45%] my-3.5 mb-20 rounded-lg'>
          <Image src={Logo} alt='orogare logo' />
        </Card>
        <div className='flex justify-between w-38 text-2xl'>
          <Text>@Orogare TVC</Text>
          <Text>{current_date}</Text>
        </div>
      </div>
      <div className='w-[33%]'>
        <Title className='text-2xl mb-2 '>Site Map</Title>

        <div className='flex flex-wrap justify-between mb-10'>
          {navdata.map((item, i) => (
            <div key={i} className='mr-3 text-[1.1em]'>
              {item.name}
            </div>
          ))}
        </div>

        <Title className='mb-4'>Contacts</Title>
        <div className='c'>
          {contacts.map((contact: any, i: number) => (
            <div key={i} className='flex items-center mb-3'>
              <div className='mr-5'> {contact.icon}</div>
              <div className=''> {contact.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-[28%]'>
        <Title className='text-2xl mb-5 '>Location</Title>

       


<Card className="h-[30vh] p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4141561209526!2d34.75182790000001!3d-0.8155369999999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b45003758d9c7%3A0x48160e780cf111b0!2sOrogare%20Technical%20Vocational%20College!5e0!3m2!1sen!2ske!4v1740258472565!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Card>
      </div>
    </div>
  )
}

export default Footer
