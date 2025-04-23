export type Course = {
  name: string
  minimumGrade: string
  examiningBody: string
  duration: string
}

export type CourseCategory = {
  title: string
  courses: Course[]
}

const cdacc_exam_body:string = 'TVET-CDACC'
const ssc_exam_body:string = 'NITA'

const diploma_duration: number = 3
const craft_duration: number = 2
const artisan_duration: number = 2

export const coursesData: CourseCategory[] = [
  {
    title: 'Diploma',
    courses: [
      {
        name: 'Diploma in Civil Engineering',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Information and Communications Technology',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Building Technology',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Business Management',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Supply Chain Management',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Accounting (ATC)',
        minimumGrade: 'C-',
        examiningBody: 'KASNEB',
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Electrical Engineering',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Social Work and Community Development',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Library Science',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Fashion and Design',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      },
      {
        name: 'Diploma in Secretarial Studies',
        minimumGrade: 'C-',
        examiningBody: cdacc_exam_body,
        duration: `${diploma_duration} years`
      }
    ]
  },
  {
    title: 'Craft',
    courses: [
      {
        name: 'Plumbing',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Masonry TEP',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Information and Communications Technology',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Civil Engineering',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Building Technology',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Information Technology',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Business Management',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Supply Chain Management',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Secretarial Single and Group',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Electrical Installation',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Library and Information Science',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      },
      {
        name: 'Clothing and Textile',
        minimumGrade: 'D+',
        examiningBody: cdacc_exam_body,
        duration: `${craft_duration} years`
      }
    ]
  },
  {
    title: 'Artisan',
    courses: [
        {
            name: 'Plumbing',
            minimumGrade: 'D',
            examiningBody: cdacc_exam_body,
            duration: `${artisan_duration} years`,
          },
          {
            name: 'Building Technology',
            minimumGrade: 'D',
            examiningBody: cdacc_exam_body,
            duration: `${artisan_duration} years`,
          },
          {
            name: 'Masonry (TEP)',
            minimumGrade: 'D',
            examiningBody: cdacc_exam_body,
            duration: `${artisan_duration} years`,
          },
          {
            name: 'Carpentry',
            minimumGrade: 'D',
            examiningBody: cdacc_exam_body,
            duration: `${artisan_duration} years`,
          },
          {
            name: 'Motor Vehicle',
            minimumGrade: 'D',
            examiningBody: cdacc_exam_body,
            duration: `${artisan_duration} years`,
          },
    ]
  },
  {
    title: 'Short Specialized Courses',
    courses: [
        {
            name: 'Electrical Wiring',
            duration: '6 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
          {
            name: 'Spray Painting',
            duration: '4 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
          {
            name: 'Cabro Laying',
            duration: '4 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
          {
            name: 'Dress Making',
            duration: '6 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
          {
            name: 'Computer Packages',
            duration: '6 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
          {
            name: 'Hairdressing and Beauty Therapy',
            duration: '4 Months',
            minimumGrade: 'N/A',
            examiningBody: ssc_exam_body,
          },
    ]
  }
]
