import { Container, Flex, MediaQuery, Title, Text, Anchor, Image } from "@mantine/core";
import { v4 as uuid } from "uuid";

const projects = [
    {
        name: <Title>Taster the bakery</Title>,
        desc: <Text size={20}>This is an improved website from 
        <Anchor href="https://tasters.imweb.me/">&nbsp;吃吃看Tasters</Anchor> 
        &nbsp;at the request of the business owner</Text>,
        img: <Image
        src="src/assets/Screenshot_20230630_093002.png"
        alt="a screenshot of a bakery website"
        />
    },
    {
        name: <Title>Weather App</Title>,
        desc: <Text size={20}>A polish web app that displays current weather for any given city/region</Text>,
        img: <Image
        src="src/assets/Screenshot-2022-11-22.PNG"
        alt="a screenshot of weather web app"
        />
    }
]

export default function Showcase() {
    return (
        <>
            <MediaQuery query="(max-width: 1024px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    {projects.map((project) => {
                        return (
                            <Flex key={uuid()} wrap="wrap" px={20} py={40} rowGap={20}>
                                {project.name}
                                {project.desc}
                                {project.img}
                            </Flex>
                        )
                    })}
                </Container>
            </MediaQuery>
        </>
    )
}