import { Title, Text, List, Paper, Divider } from '@mantine/core';
import { FaCheckCircle } from 'react-icons/fa';

const Admission = () => {
  const documents = [
    'National ID or Birth Certificate',
    // 'Completed Admission Form',
    'Two Passport-sized Photos',
    'Academic Certificates or Transcripts',
    'Medical Report (if required)',
    'Parent/Guardian ID (if under 18)',
    // 'Payment Slip (if applicable)',
  ];

  const intakeStart = 'Tuesday, April 1, 2025';
  const intakeClose = 'Saturday, May 31, 2025';

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 mt-10 md:mt-0 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Intake Dates */}
        <Paper shadow="xs" p="lg" radius="md" className="bg-primary-50 mb-12">
          <Title order={2} className="text-center text-primary-700 mb-2">
            Ongoing Intake
          </Title>
          <Text className="text-center text-gray-700">
            <b>Started on:</b> {intakeStart}
          </Text>
          <Text className="text-center text-gray-700">
            <b>Closes on:</b> {intakeClose}
          </Text>
        </Paper>

        {/* Admission Notice */}
        <Paper shadow="xs" p="xl" radius="md" className="bg-gray-50">
          <Title order={3} className="text-secondary-600 mb-4">
            Report to School with the Following Documents
          </Title>
          <Text className="mb-6 text-gray-700">
            To complete your admission process, ensure you physically report to the school with the original and
            photocopies of the following documents:
          </Text>

          <Divider className="mb-6" />

          <List spacing="sm" size="md" className="text-gray-800">
            {documents.map((doc, index) => (
              <List.Item
                key={index}
                icon={<FaCheckCircle className="text-green-600" />}
              >
                {doc}
              </List.Item>
            ))}
          </List>
        </Paper>
      </div>
    </section>
  );
};

export default Admission;
