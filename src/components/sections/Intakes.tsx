import { Button, Card, Text, Title } from '@mantine/core'

const Intakes = () => {
  const opening = [
    {
      title: 'January Intake',
      from: '1st Jan 2025',
      to: '1st Jan 2025'
    },
    {
      title: 'May Intake',
      from: '1st Jan 2025',
      to: '1st Jan 2025'
    },
    {
      title: 'September Intake',
      from: '1st Jan 2025',
      to: '1st Jan 2025'
    }
  ]
  return (
    <div className='px-[4%] w-screen h-[74vh]'>
      <Title className='text-secondary-500'>Intakes</Title>
      <Text className='text-text-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt
        corrupti atque commodi sequi adipisci ad optio praesentium? Dolorum,
        expedita. Odit cupiditate laborum, debitis suscipit in repellendus
        dolore enim doloribus?
      </Text>

      <div className='sect flex justify-between mt-5'>
        {opening.map((item, i) => (
          <Card
            key={i}
            className='flex flex-row bg-gradient-to-b from-secondary-400 to-primary-500 w-[32%] h-[300px] relative rounded-lg'
          >
            <Card.Section className='bg-white absolute right-0 !h-[100%] w-[93%] px-3 py-7'>
              <Title className='text-[1.5em] text-primary-700'>{item.title}</Title>
              <p className='text-primary-300'>From</p>
              <Text className='text-secondary-500 text-[1.5em] font-bold'>{item.from}</Text>
              <p className='text-primary-300'>To</p>
              <Text className='text-secondary-500 text-[1.5em] font-bold'>{item.to}</Text>
            </Card.Section>
            <Button className='absolute bg-gradient-to-r from-secondary-400 to-primary-500 bottom-[10%] left-[15%] w-[27%]'>Apply</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Intakes
