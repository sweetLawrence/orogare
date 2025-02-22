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
    <div className='px-[4%] w-screen md:h-[74vh]'>
      <Title className='text-secondary-500'>Intakes</Title>
      {/* <Text className='text-text-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunt
        corrupti atque commodi sequi adipisci ad optio praesentium? Dolorum,
        expedita. Odit cupiditate laborum, debitis suscipit in repellendus
        dolore enim doloribus?
      </Text> */}

      <Text className='text-text-500'>
        We offer three major intakes each year, providing multiple opportunities
        for students to join our programs. Whether you are looking to start in 
        <b> January, May,</b>  or <b>September,</b> our flexible admission schedule ensures you
        can begin your academic journey at a convenient time.
      </Text>

      <div className='flex flex-col md:flex-row justify-between mt-5'>
        {opening.map((item, i) => (
          <Card
            key={i}
            className='flex flex-row bg-gradient-to-b from-secondary-400 to-primary-500 md:w-[32%] mb-5 md:mb-0 h-[300px] relative rounded-lg'
          >
            <Card.Section className='bg-white absolute right-0 !h-[100%] w-[93%] px-3 py-7'>
              <Title className='text-[1.5em] text-primary-700'>
                {item.title}
              </Title>
              <p className='text-primary-300'>From</p>
              <Text className='text-secondary-500 text-[1.5em] font-bold'>
                {item.from}
              </Text>
              <p className='text-primary-300'>To</p>
              <Text className='text-secondary-500 text-[1.5em] font-bold'>
                {item.to}
              </Text>
            </Card.Section>
            <Button className='absolute bg-gradient-to-r from-secondary-400 to-primary-500 bottom-[10%] left-[15%] w-[27%]'>
              Apply
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Intakes
