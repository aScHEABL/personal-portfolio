import { Box, Flex, Title, Text } from "@mantine/core";

const job_array = [
{
    company: "Far Eastern Group, ding & ding management consultants co. ltd",
    jobTitle: "Management information intern, help desk",
    Date: "Sep 2022 - Present"
},
]

export default function WorkExperience() {
    return (
        <Box>
            {
                job_array.map((job) => {
                    return (
                        <Box>
                            <Title>{job.company}</Title>
                        </Box>
                    )
                })
            }
        </Box>
    )
}