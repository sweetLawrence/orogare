// import { Card, Title, Text, Button, Group } from '@mantine/core'
// import { FiEye, FiDownload } from 'react-icons/fi'
// import Charter from '../docs/orogare_charter.pdf'

// const CharterPage: React.FC = () => {
//   return (
//     <div className='p-6 max-w-3xl mx-auto mt-20 md:mt-0'>
//       <Title order={2} className='mb-6 text-center text-primary-800 text-[2em]'>
//         Institution Charter
//       </Title>

//       <Card shadow='md' padding='lg' radius='md' withBorder>
//         <Text className='mb-4 text-gray-700'>
//           The Orogare TVC Charter outlines the institution’s mission, vision,
//           values, governance structure, and guiding principles. It defines our
//           commitment to quality education and service delivery.
//         </Text>

//         <Group className='mt-4 flex-col sm:flex-row gap-4'>
//           <Button
//             component='a'
//             href={Charter}  // Use the imported Charter PDF
//             target='_blank'
//             rel='noopener noreferrer'
//             variant='outline'
//             leftSection={<FiEye size={18} />}
//             className='w-full sm:w-auto'
//           >
//             View Charter
//           </Button>

//           <Button
//             component='a'
//             href={Charter}  // Use the imported Charter PDF
//             download
//             leftSection={<FiDownload size={18} />}
//             className='bg-gradient-to-r from-secondary-400 to-primary-500 text-white w-full sm:w-auto'
//           >
//             Download Charter
//           </Button>
//         </Group>
//       </Card>
//     </div>
//   )
// }

// export default CharterPage

import { Card, Title, Text, Button, Group, Divider } from '@mantine/core'
import { FiEye, FiDownload } from 'react-icons/fi'
import Charter from '../docs/orogare_charter.pdf'

const CharterPage: React.FC = () => {
  return (
    <div className='p-6 max-w-3xl mx-auto mt-20 md:mt-0'>
      {/* Page Title */}
      <Title order={2} className='mb-6 text-center text-primary-800 text-[2em]'>
        Institution Charter
      </Title>

      {/* Description Section */}
      <Text className='text-center mb-6 text-lg text-gray-600'>
        Welcome to the official Orogare TVC Charter page. Here, you can explore
        the principles and values that guide our institution, along with our
        mission and vision for delivering quality education.
      </Text>

      {/* Charter Information Card */}
      <Card shadow='md' padding='lg' radius='md' withBorder>
        <Text className='mb-4 text-gray-700'>
          The Orogare TVC Charter outlines the institution’s mission, vision,
          values, governance structure, and guiding principles. It defines our
          commitment to quality education and service delivery.
        </Text>

        {/* Divider for separation */}
        <Divider className='my-4' />

        <Text className='text-gray-600'>
          {/* By reading the full charter, you’ll gain insights into the
          organizational structure and strategic goals of Orogare TVC, ensuring
          that all our stakeholders are aligned with the institution’s long-term
          vision. */}
        </Text>

        {/* Button Section */}
        <Group className='mt-4 flex-col sm:flex-row gap-4'>
          <Button
            component='a'
            href={Charter}
            target='_blank'
            rel='noopener noreferrer'
            variant='outline'
            leftSection={<FiEye size={18} />}
            className='w-full sm:w-auto'
          >
            View Charter
          </Button>

          <Button
            component='a'
            href={Charter}
            download
            leftSection={<FiDownload size={18} />}
            className='bg-gradient-to-r from-secondary-400 to-primary-500 text-white w-full sm:w-auto'
          >
            Download Charter
          </Button>
        </Group>
      </Card>
    </div>
  )
}

export default CharterPage
