import { 
    Box,
    Title,
    Text,
    Flex,
    Container,
    MediaQuery
 } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { useEffect, useState, Fragment } from "react";

interface job_prop {
    company: string;
    title: string;
    durationDate: string;
    id?: string;
}

const jobs = [
    {
        company: "Far Eastern Group",
        title: "MIS intern, Help desk",
        durationDate: "Sep 2022 - Present"
    },
    // {
    //     company: "輝宇運動有限公司",
    //     title: "Lifeguard",
    //     durationDate: "Jan 2022 - Oct 2022"
    // }
]

export default function WorkExperience() {
    const [job_array, setJobs_array] = useState<job_prop[]>([]);
    useEffect(() => {
        setJobs_array(jobs.map((job) => ({ ...job, id: uuid() })));
    }, [])
    return (
        <Box>
            <MediaQuery query="(max-width: 340px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Box sx={{ display: 'none' }}>
                    {
                        job_array.map((job) => {
                            return (
                                        <Flex p={20} key={job.id} wrap="wrap" 
                                        sx={(theme) => ({
                                            '&:not(:last-child)': {
                                                borderBottom: '1px solid',
                                                borderColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[8]
                                            }
                                        })}>
                                            <Title order={3} size={20}>
                                                {job.company}
                                            </Title>
                                            <Text pb={8}>
                                                {job.durationDate}
                                            </Text>
                                            <Title order={4} size={18}>
                                                {job.title}
                                            </Title>
                                        </Flex>
                            )
                        })
                    }
                </Box>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px) and (min-width: 341px)" styles={{ display: 'block' }}>
                <Container size="30rem" px={40} pb={40} sx={{ display: 'none' }}>
                    {
                        job_array.map((job) => {
                            return (
                                <Fragment key={job.id}>
                                    <Flex py={20} wrap="wrap" justify="space-between"
                                    sx={(theme) => ({ 
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid',
                                            borderColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[8]
                                        }
                                    })}>
                                        <Title order={3}>
                                            {job.company}
                                        </Title>
                                        <Text>
                                            {job.durationDate}
                                        </Text>
                                        <Title order={4} sx={{ flex: "1 1 100%" }}>{job.title}</Title>
                                    </Flex>
                                </Fragment>
                            )
                        })
                    }
                </Container>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px)" styles={{ display: 'block' }}>
                <Container size="70rem" pb={40} px={100} 
                    sx={{ 
                        display: 'none',
                    }}>
                    {
                        job_array.map((job) => {
                            return (
                                <Fragment key={job.id}>
                                    <Flex py={20} wrap="wrap" justify="space-between" 
                                    sx={(theme) => ({
                                        '&:not(:last-child)': {
                                            borderBottom: '1px solid',
                                            borderColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[8]
                                        }
                                    })}>
                                        <Title order={3} size={25}>
                                            {job.company}
                                        </Title>
                                        <Text size={20}>
                                            {job.durationDate}
                                        </Text>
                                        <Title order={4} size={20} sx={{ flex: "1 1 100%" }}>{job.title}</Title>
                                    </Flex>
                                </Fragment>
                            )
                        })
                    }
                </Container>
            </MediaQuery>
        </Box>
    )
}