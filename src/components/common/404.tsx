import { Title, Text, Center, Stack } from '@mantine/core'

import { FaTools } from 'react-icons/fa'

const UnderConstructionPage = () => {
  return (
    <Center className="min-h-screen bg-gray-50">
      <Stack align="center">

        <Title order={2} className="text-center text-gray-800">
          This Page is Under Construction
        </Title>
        <Text className="text-center text-gray-600 max-w-md">
          We're working hard to bring this page to life! Please check back later.
        </Text>
        <FaTools size={50} className='mb-4 text-yellow-500' />
      </Stack>
    </Center>
  )
}

export default UnderConstructionPage
