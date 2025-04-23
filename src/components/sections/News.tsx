// import { Button, Card, Image, Text, Title } from '@mantine/core'
// import test from '../../assets/gate.png'

// const News = () => {
//   return (
//     <div className='px-[4%] md:h-[70vh] w-full'>
//       <Title className='text-secondary-500'>News & announcements</Title>
//       <div className='sd flex flex-col md:flex-row items-center justify-between mt-6 '>
//         <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md '>
//           <Card.Section>
//             <Image src={test} className='w-[100%] h-40 object-cover' />
//             <Title className='mx-3.5 text-2xl text-secondary-500'>Official opening date</Title>
//             <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Accusantium odio quaerat voluptas minus dolores.
//             </Text>
//           </Card.Section>
//           <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
//         </Card>

//         <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md'>
//           <Card.Section>
//             <Image src={test} className='w-[100%] h-40 object-cover' />
//             <Title className='mx-3.5 text-2xl text-secondary-500'>Graduation Ceremony</Title>
//             <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Accusantium odio quaerat voluptas minus dolores.
//             </Text>
//           </Card.Section>
//           <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
//         </Card>

//         <Card radius='md' className='bg-white md:w-[32.5%] mb-5 md:mb-0 shadow-md '>
//           <Card.Section>
//             <Image src={test} className='w-[100%] h-40 object-cover' />
//             <Title className='mx-3.5 text-2xl text-secondary-500'>Official Examination date</Title>
//             <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Accusantium odio quaerat voluptas minus dolores.
//             </Text>
//           </Card.Section>
//           <Button variant="outline" className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'>Read All</Button>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default News

import { Button, Card, Image, Text, Title } from '@mantine/core'
// import test from '../../assets/gate.png'

type NewsItem = {
  title: string
  description: string
  image: string
}

const News = () => {
  const newsItems: NewsItem[] = [
    // {
    //   title: 'Official opening date',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio quaerat voluptas minus dolores.',
    //   image: test
    // },
    // {
    //   title: 'Graduation Ceremony',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio quaerat voluptas minus dolores.',
    //   image: test
    // },
    // {
    //   title: 'Official Examination date',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio quaerat voluptas minus dolores.',
    //   image: test
    // }
  ]

  return (
    <div className='px-[4%] md:h-[70vh] w-full'>
      <Title className='text-secondary-500'>News & announcements</Title>

      {newsItems.length === 0 ? (
        <Text className='mt-6 text-te]xt-500 text-red-500 mb-6 font-semibold'>
          No news or announcements available at the moment.
        </Text>
      ) : (
        <div className='sd flex flex-col md:flex-row items-center justify-between mt-6 flex-wrap gap-4'>
          {newsItems.map((item, index) => (
            <Card
              key={index}
              radius='md'
              className='bg-white md:w-[31.5%] w-full shadow-md'
            >
              <Card.Section>
                <Image
                  src={item.image}
                  className='w-[100%] h-40 object-cover'
                />
                <Title className='mx-3.5 text-2xl text-secondary-500'>
                  {item.title}
                </Title>
                <Text className='mx-3.5 mb-4 my-1.5 text-text-500 font-semibold'>
                  {item.description}
                </Text>
              </Card.Section>
              <Button
                variant='outline'
                className='w-[40%] border-2 rounded-lg h-10 border-secondary-500'
              >
                Read All
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default News
