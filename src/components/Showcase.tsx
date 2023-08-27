import { Container, 
    Flex, 
    MediaQuery, 
    Title, 
    Text, 
    Anchor, 
    Image,
    Box,
} from "@mantine/core";
import { useState, useEffect, ReactNode } from "react";
import { v4 as uuid } from "uuid";
import tasterTheBakery_img from "../assets/Screenshot_20230630_093002.png";
import weatherApp_img from "../assets/Screenshot-2022-11-22.png";
import toDoList_img from "../assets/Screenshot 2023-08-21 at 11.26.39 PM.png"

interface projectProp {
    name: string;
    desc: ReactNode;
    tech: string;
    img: { src: string, alt: string }
    id?: string;
}

const projects = [
    {
        name: "Taster the bakery",
        desc: <div>This is an improved website from 
        <Anchor href="https://tasters.imweb.me/">&nbsp;吃吃看Tasters</Anchor> 
        &nbsp;at the request of the business owner.</div>,
        tech: "Chakra-UI - React",
        img: {
            src: tasterTheBakery_img,
            alt: "a screenshot of a bakery website",
        }
    },
    {
        name: "Weather App",
        desc: <div>A polish and sleek web app that displays current weather for any given city/region.</div>,
        tech: "HTML - CSS - Javascript",
        img: {
            src: weatherApp_img,
            alt: "a screenshot of weather web app",
        }
    },
    {
        name: "To do list app",
        desc: <div>A to do list web app allows you add and edit task, dragging tasks and move them between the columns.</div>,
        tech: "hello-pangea/dnd - React - Typescript",
        img: {
            src: toDoList_img,
            alt: "a screenshot of to do list app"
        }
    },
    {
        name: "CV Project",
        desc: <div>Allow the users to generate and download their CV on the website in real-time.</div>,
        tech: "React - Tailwind - JsPDF",
        img: {
            src: "",
            alt: "a screenshot of CV Project"
        }
    }
]

export default function Showcase() {
    const [projects_array, setProjects_array] = useState<projectProp[]>([]);

    useEffect(() => {
        setProjects_array(projects.map((project) => ({ ...project, id: uuid() })))
    }, [])
    return (
        <>
            {/* for both mobile & talbet devices */}
            <MediaQuery query="(max-width: 1023px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    {projects_array.map((project) => {
                        return (
                            <Flex key={project.id} wrap="wrap" px={20} py={40} rowGap={20} justify="center">
                                <Title>{project.name}</Title>
                                <Text size={20}>
                                    {project.desc}
                                </Text>
                                <Text component="label">{project.tech}</Text>
                                <Image
                                src={project.img.src}
                                alt={project.img.alt}
                                />
                            </Flex>
                        )
                    })}
                </Container>
            </MediaQuery>
            <MediaQuery query="(max-width: 2560px) and (min-width: 1024px)" styles={{ display: 'block' }}>
                    <Container size="110rem" px={100} sx={{ display: 'none' }}>
                        {projects_array.map((project, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <Flex key={project.id} px={20} py={40} rowGap={20}>
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
                                                backgroundColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[8],
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
                                    <Flex key={project.id} px={20} py={40} rowGap={20}>
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
                                                backgroundColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[8],
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