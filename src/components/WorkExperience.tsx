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
    jobTitle: "MIS intern, Help desk",
    date: "Sep 2022 - Present"
},
]

export default function WorkExperience() {
    return (
        <Box>
            {
                job_array.map((job) => {
                    return (
                        <>
                            <MediaQuery query="(max-width: 425px) and (min-width: 300px)" styles={{ display: 'block' }}>
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
                                        {job.date}
                                    </Text>
                                    <Title order={4} size={18}>
                                        {job.jobTitle}
                                    </Title>
                                </Flex>
                            </MediaQuery>
                            <MediaQuery query="(max-width: 767px) and (min-width: 424px)" styles={{ display: 'block' }}>
                                <Flex p={20} key={uuid()} wrap="wrap">
                                    
                                </Flex>
                            </MediaQuery>
                        </>
                    )
                })
            }
        </Box>
    )
}