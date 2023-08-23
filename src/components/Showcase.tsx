import { Container, Flex, MediaQuery, Title, Text, Anchor, Image } from "@mantine/core";
import { v4 as uuid } from "uuid";

const projects = [
    {
        name: "Taster the bakery",
        desc: <div>This is an improved website from 
        <Anchor href="https://tasters.imweb.me/">&nbsp;吃吃看Tasters</Anchor> 
        &nbsp;at the request of the business owner</div>,
        img: {
            src: "src/assets/Screenshot_20230630_093002.png",
            alt: "a screenshot of a bakery website",
        }
    },
    {
        name: "Weather App",
        desc: <div>A polish web app that displays current weather for any given city/region</div>,
        img: {
            src: "src/assets/Screenshot-2022-11-22.PNG",
            alt: "a screenshot of weather web app",
        }
    }
]

export default function Showcase() {
    return (
        <>
            {/* for both mobile & talbet devices */}
            <MediaQuery query="(max-width: 1024px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    {projects.map((project) => {
                        return (
                            <Flex key={uuid()} wrap="wrap" px={20} py={40} rowGap={20}>
                                <Title>{project.name}</Title>
                                <Text size={20}>
                                    {project.desc}
                                </Text>
                                <Image
                                src={project.img.src}
                                alt={project.img.alt}
                                />
                                {/* {project.name}
                                {project.desc}
                                {project.img} */}
                            </Flex>
                        )
                    })}
                </Container>
            </MediaQuery>
            <MediaQuery query="(max-width: 1439px) and (min-width: 1024px)" styles={{ display: 'none' }}>
                    <Container sx={{ display: 'none' }}>

                    </Container>
            </MediaQuery>
        </>
    )
}