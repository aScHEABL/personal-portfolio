import { Container, 
    Flex, 
    MediaQuery, 
    Title, 
    Text, 
    Anchor, 
    Image,
    Box,

} from "@mantine/core";
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
        desc: <div>A polish and sleek web app that displays current weather for any given city/region</div>,
        img: {
            src: "src/assets/Screenshot-2022-11-22.PNG",
            alt: "a screenshot of weather web app",
        }
    },
    {
        name: "To do list app",
        desc: <div>A to do list web app that let you add and edit task, dragging tasks and move them between the columns.</div>,
        img: {
            src: "src/assets/Screenshot 2023-08-21 at 11.26.39 PM.png",
            alt: "a screenshot of to do list app"
        }
    },
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
                            </Flex>
                        )
                    })}
                </Container>
            </MediaQuery>
            <MediaQuery query="(max-width: 1439px) and (min-width: 1024px)" styles={{ display: 'block' }}>
                    <Container sx={{ display: 'none' }}>
                        {projects.map((project, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <Flex key={uuid()} px={20} py={40} rowGap={20}>
                                        <Box sx={{
                                            zIndex: 1,
                                            position: "relative",
                                            left: "4em",
                                        }}>
                                            <Title>
                                                {project.name}
                                            </Title>
                                            <Box sx={(theme) => ({
                                                margin: "1em 0 0 0",
                                                padding: "1em 1em 1em 1em",
                                                backgroundColor: theme.colors.gray[8],
                                                borderRadius: "6px"
                                            })}>
                                                <Text size={20} p={12}>
                                                    {project.desc}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Image
                                            src={project.img.src}
                                            alt={project.img.alt}
                                        />
                                    </Flex>
                                )
                            } else {
                                return (
                                    <Flex key={uuid()} px={20} py={40} rowGap={20}>
                                        <Image
                                        src={project.img.src}
                                        alt={project.img.alt}
                                        />
                                        <Box sx={{
                                            zIndex: 1,
                                            position: "relative",
                                            right: "4em"
                                        }}
                                        >
                                            <Title align="right">
                                                {project.name}
                                            </Title>
                                            <Box sx={(theme) => ({
                                                margin: "1em 0 0 0",
                                                padding: "1em 1em 1em 1em",
                                                backgroundColor: theme.colors.gray[8],
                                                borderRadius: "6px"
                                            })}>
                                                <Text size={20} p={12}>
                                                    {project.desc}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Flex>
                                )
                            }
                        })}
                    </Container>
            </MediaQuery>
        </>
    )
}