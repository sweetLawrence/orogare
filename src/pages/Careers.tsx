import React from 'react'
import {
  Card,
  Text,
  Title,
  Button,
  Group,
  Badge,
  Collapse
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

interface Job {
  title: string
  deadline: string
  roles: string[]
  qualifications: string[]
}

const jobs: Job[] = [
    {
      title: 'Trainer in Automotive Engineering',
      deadline: 'Fri 13, Sep 2026',
      roles: [
        'Develop and deliver comprehensive training programs in automotive technology.',
        'Provide hands-on demonstrations and practical workshops for students on automotive systems and diagnostics.',
        'Assess students\' progress and provide constructive feedback to enhance their learning experience.',
        'Stay updated with the latest advancements in automotive technology to integrate into training sessions.',
        'Collaborate with industry experts to ensure the training curriculum aligns with current automotive standards and trends.',
      ],
      qualifications: [
        'Certification in automotive technology or relevant industry certifications.',
        'Minimum 3 years of experience in the automotive industry or teaching automotive courses.',
        'Strong knowledge of modern automotive systems, diagnostics, and repair techniques.',
        'Excellent communication and instructional skills, with the ability to engage students in hands-on learning.',
      ],
    },

]

const CareersPage: React.FC = () => {
  return (
    <div className='p-6 px-2 max-w-4xl md:max-w-6xl mx-2 md:mx-auto mt-20 md:mt-0 '>
      <Title order={2} className='mb-4 text-cener text-primary-800 text-[2em]'>
        Careers at Orogare TVC
      </Title>
      <Text className='mb-6 text-gray-700'>
        Orogare TVC is an equal opportunity employer and selects candidates on
        merit through fair and open competition from the widest range of
        eligible candidates.
      </Text>

      <div className='bg-gray-50 rounded-xl p-4 mb-10 border border-gray-200'>
        <Title order={4} className='text-primary-800 mb-2'>
          How to apply
        </Title>
        <Text className='mb-2'>
          All the applications should be addressed to:
        </Text>
        <Text>
          Principal, Orogare TVC,
          <br />
          PO Box 356-40204, Ogembo
        </Text>
        <Text className='mt-2'>
          Applications should reach the office before or on the specified
          deadline (physical copy).
        </Text>
        <Text className='mt-4 font-medium'>Include copies of:</Text>
        <ul className='list-disc list-inside ml-4 text-gray-700'>
          <li>National ID</li>
          <li>Valid certificate of good conduct</li>
          <li>Tax compliance certificate</li>
          <li>HELB clearance</li>
          <li>Professional body membership (if any)</li>
        </ul>
      </div>

      <Title order={3} className='mb-4 text-primary-800'>
        Open Positions
      </Title>

      {jobs.length !== 0 ? ( // change !== to === when necessary
        <div className='text-red-500 font-bold'>
            No open positions at the moment
        </div>
      ) : (
        <div className='space-y-6'>
          {jobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      )}
    </div>
  )
}

const JobCard: React.FC<Job> = ({ title, deadline, roles, qualifications }) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Card
      shadow='md'
      padding='lg'
      radius='md'
      withBorder
      className='hover:shadow-xl transition-shadow'
    >
      <Group className='mb-2'>
        <Title order={4}>{title}</Title>
        <Badge color='blue' variant='light'>
          Deadline: {deadline}
        </Badge>
      </Group>

      <Collapse in={opened}>
        <div className='mt-2'>
          <Text className='mb-1 text-blue-600'>Roles</Text>
          <ul className='list-disc ml-5 text-sm text-gray-700'>
            {roles.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <Text className='mt-4 mb-1 text-blue-600'>Qualifications</Text>
          <ul className='list-disc ml-5 text-sm text-gray-700'>
            {qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      </Collapse>

      <Button
        variant='subtle'
        color='blue'
        onClick={toggle}
        className='mt-4'
      >
        {opened ? 'Show less ↑' : 'Show more ↓'}
      </Button>
    </Card>
  )
}

export default CareersPage
