import { Button, Group, Input, Paper, Select, Space, Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Course, coursesData } from "../data/coursesData";

const Courses = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const categoryQuery = queryParams.get("category");

    const [search_term, setSearch] = useState("");
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const filterCourses = (courses: Course[]) =>
        courses.filter((course) => course.name.toLowerCase().includes(search_term.toLowerCase()));
    const categoriesToDisplay = selectedTitle ? coursesData.filter((cat) => cat.title === selectedTitle) : coursesData;

    useEffect(() => {
        if (categoryQuery) {
            setSelectedTitle(categoryQuery);
        }
    }, [categoryQuery]);

    return (
        <div className="w-[95%] m-auto p-6 mt-20 md:mt-0">
            <Link className="m-auto sticky top-20" to="/downloads">
                <Button radius={7}>Download fee structure</Button>
            </Link>
            <Space h={20} />
            <Title order={2} mb="md">
                Our Courses
            </Title>

            <Group className="mb-6" grow>
                <Input
                    placeholder="Search course..."
                    value={search_term}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    className="max-w-full"
                />
                <Select
                    placeholder="Filter by category"
                    data={coursesData.map((cat) => cat.title)}
                    value={selectedTitle}
                    onChange={setSelectedTitle}
                    clearable
                    className="max-w-full"
                />
            </Group>

            {categoriesToDisplay.map((category) => {
                const filteredCourses = filterCourses(category.courses);
                if (filteredCourses.length === 0) return null;

                return (
                    <div key={category.title} className="mb-10">
                        <Title order={4} mb="xs" className="text-primary-600">
                            {category.title}
                        </Title>

                        <Paper withBorder shadow="xs" radius="md" p="xs" className="overflow-auto">
                            <div className="table-responsive">
                                <Table
                                    striped
                                    highlightOnHover
                                    withTableBorder
                                    verticalSpacing="md"
                                    horizontalSpacing="md"
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
                );
            })}
        </div>
    );
};

export default Courses;
