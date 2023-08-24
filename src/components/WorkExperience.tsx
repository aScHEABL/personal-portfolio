import { Box, Title } from "@mantine/core";
import { v4 as uuid } from "uuid";

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
                        <Box key={uuid()}>
                            <Title>{job.company}</Title>
                        </Box>
                    )
                })
            }
        </Box>
    )
}