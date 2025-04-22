// import { Input, Table, Paper, Title, Select, Group } from '@mantine/core'
// import { useState } from 'react'
// import { coursesData, Course } from '../data/coursesData'

// const Courses = () => {
//   const [search, setSearch] = useState('')
//   const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

//   const filterCourses = (courses: Course[]) =>
//     courses.filter(course =>
//       course.name.toLowerCase().includes(search.toLowerCase())
//     )
//   const categoriesToDisplay = selectedTitle
//     ? coursesData.filter(cat => cat.title === selectedTitle)
//     : coursesData

//   return (
//     <div className='p-6 mt-[20%] sm:mt-0'>
//       <Title order={2} mb='md'>
//         Our Courses
//       </Title>

//       <Group className='mb-6'>
//         <Input
//           placeholder='Search course...'
//           value={search}
//           onChange={e => setSearch(e.currentTarget.value)}
//           className='max-w-md'
//         />
//         <Select
//           placeholder='Filter by category'
//           data={coursesData.map(cat => cat.title)}
//           value={selectedTitle}
//           onChange={setSelectedTitle}
//           clearable
//           className='max-w-md'
//         />
//       </Group>

//       {categoriesToDisplay.map(category => {
//         const filteredCourses = filterCourses(category.courses)
//         if (filteredCourses.length === 0) return null

//         return (
//           <div key={category.title} className='mb-10'>
//             <Title order={4} mb='xs' className='text-primary-600'>
//               {category.title}
//             </Title>

//             <Paper
//               withBorder
//               shadow='xs'
//               radius='md'
//               p='xs'
//               className='overflow-auto'
//             >
//               <Table
//                 striped
//                 highlightOnHover
//                 withTableBorder
//                 verticalSpacing='md'
//                 horizontalSpacing='md'
//               >
//                 <Table.Thead>
//                   <Table.Tr>
//                     <Table.Th>Course</Table.Th>
//                     <Table.Th>Minimum grade</Table.Th>
//                     <Table.Th>Examining body</Table.Th>
//                     <Table.Th>Duration</Table.Th>
//                   </Table.Tr>
//                 </Table.Thead>

//                 <Table.Tbody>
//                   {filteredCourses.map((course, index) => (
//                     <Table.Tr key={index}>
//                       <Table.Td>{course.name}</Table.Td>
//                       <Table.Td>{course.minimumGrade}</Table.Td>
//                       <Table.Td>{course.examiningBody}</Table.Td>
//                       <Table.Td>{course.duration}</Table.Td>
//                     </Table.Tr>
//                   ))}
//                 </Table.Tbody>
//               </Table>
//             </Paper>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Courses





import { Input, Table, Paper, Title, Select, Group } from '@mantine/core'
import { useState } from 'react'
import { coursesData, Course } from '../data/coursesData'

const Courses = () => {
  const [search, setSearch] = useState('')
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  const filterCourses = (courses: Course[]) =>
    courses.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    )
  const categoriesToDisplay = selectedTitle
    ? coursesData.filter(cat => cat.title === selectedTitle)
    : coursesData

  return (
    <div className='p-6 mt-20 md:mt-0'>
      <Title order={2} mb='md'>
        Our Courses
      </Title>

      <Group className='mb-6' grow>
  <Input
    placeholder='Search course...'
    value={search}
    onChange={e => setSearch(e.currentTarget.value)}
    className='max-w-full'
  />
  <Select
    placeholder='Filter by category'
    data={coursesData.map(cat => cat.title)}
    value={selectedTitle}
    onChange={setSelectedTitle}
    clearable
    className='max-w-full'
  />
</Group>


      {categoriesToDisplay.map(category => {
        const filteredCourses = filterCourses(category.courses)
        if (filteredCourses.length === 0) return null

        return (
          <div key={category.title} className='mb-10'>
            <Title order={4} mb='xs' className='text-primary-600'>
              {category.title}
            </Title>

            <Paper
              withBorder
              shadow='xs'
              radius='md'
              p='xs'
              className='overflow-auto'
            >
              <div className='table-responsive'>
                <Table
                  striped
                  highlightOnHover
                  withTableBorder
                  verticalSpacing='md'
                  horizontalSpacing='md'
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Course</Table.Th>
                      <Table.Th>Minimum grade</Table.Th>
                      <Table.Th>Examining body</Table.Th>
                      <Table.Th>Duration</Table.Th>
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    {filteredCourses.map((course, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{course.name}</Table.Td>
                        <Table.Td>{course.minimumGrade}</Table.Td>
                        <Table.Td>{course.examiningBody}</Table.Td>
                        <Table.Td>{course.duration}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            </Paper>
          </div>
        )
      })}
    </div>
  )
}

export default Courses
