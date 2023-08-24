import { 
    Box,
    Title,
    Text,
    Flex,
    MediaQuery
 } from "@mantine/core";
import { v4 as uuid } from "uuid";

const job_array = [
{
    company: "Far Eastern Group",
    title: "MIS intern, Help desk",
    durationDate: "Sep 2022 - Present"
},
]

export default function WorkExperience() {
    return (
        <Box>
            {
                job_array.map((job) => {
                    return (
                        <>
                            <MediaQuery query="(max-width: 424px) and (min-width: 300px)" styles={{ display: 'block' }}>
                                <Flex p={20} key={uuid()} wrap="wrap" 
                                sx={(theme) => ({
                                    display: 'none', 
                                    borderBottom: "1px solid",
                                    borderColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[6]
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
                            </MediaQuery>
                            <MediaQuery query="(max-width: 2560px) and (min-width: 426px)" styles={{ display: 'block' }}>
                                <Flex justify="center" px={40} key={uuid()} wrap="wrap" sx={{ display: 'none' }}>
                                    <Flex justify="space-between" align="center">
                                        <Title order={3}>
                                            {job.company}
                                        </Title>
                                        <Text>
                                            {job.durationDate}
                                        </Text>
                                    </Flex>
                                    <Title order={4}>{job.title}</Title>
                                </Flex>
                            </MediaQuery>
                        </>
                    )
                })
            }
        </Box>
    )
}