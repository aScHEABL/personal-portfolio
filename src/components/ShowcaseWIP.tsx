import { v4 as uuid } from "uuid";
import { useState, useEffect, ReactNode, useRef } from "react";
import tasterTheBakery_img from "../assets/Screenshot_20230630_093002.png";
import weatherApp_img from "../assets/Screenshot-2022-11-22.png";
import toDoList_img from "../assets/Screenshot 2023-08-21 at 11.26.39 PM.png"
import { 
    Anchor,
    Container,
    MediaQuery,
    Flex,
    Title,
    Text,
    Image,
    Box,
    createStyles,
 } from "@mantine/core"


interface projectProp {
    name: string;
    desc: ReactNode;
    img: { src: string, alt: string }
    id?: string;
}

const projects = [
    {
        name: "Taster the bakery",
        desc: <div>This is an improved website from 
        <Anchor href="https://tasters.imweb.me/">&nbsp;吃吃看Tasters</Anchor> 
        &nbsp;at the request of the business owner</div>,
        img: {
            src: tasterTheBakery_img,
            alt: "a screenshot of a bakery website",
        }
    },
    {
        name: "Weather App",
        desc: <div>A polish and sleek web app that displays current weather for any given city/region</div>,
        img: {
            src: weatherApp_img,
            alt: "a screenshot of weather web app",
        }
    },
    {
        name: "To do list app",
        desc: <div>A to do list web app that let you add and edit task, dragging tasks and move them between the columns.</div>,
        img: {
            src: toDoList_img,
            alt: "a screenshot of to do list app"
        }
    },
]

const useStyles = createStyles(() => ({
    showProjectAnimation: {
        transform: "none",
        opacity: 1,
    },
    projectInitialStyle: {

    },
}))

export default function ShowcaseWIP() {

    const { classes } = useStyles();

    const [projects_array, setProjects_array] = useState<projectProp[]>([]);
    const refs_array = useRef<Array<HTMLDivElement | null>>([]);
    const observers = useRef<IntersectionObserver[]>([]);


    useEffect(() => {
        setProjects_array(projects.map((project) => ({ ...project, id: uuid() })));

        // Create IntersectionObserver instances for each project element
        observers.current = refs_array.current.map(() => new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Handle intersection logic here
                // entry.target refers to the observed project element
                if (entry.isIntersecting) {
                    // Your logic when the element becomes visible
                    entry.target.classList.toggle(classes.showProjectAnimation, entry.isIntersecting)
                }
            });
        }, 
        { 
            threshold: 0.3
        }));
    }, [])

    useEffect(() => {
        // Start observing each project element
        refs_array.current.forEach((ref, index) => {
            if (ref && observers.current[index]) {
                observers.current[index].observe(ref);
            }
        });

        // Cleanup function
        return () => {
            observers.current.forEach((observer) => {
                observer.disconnect();
            });
        };
    }, [refs_array.current])

    return (
        <>
            {/* for both mobile & talbet devices */}
            <MediaQuery query="(max-width: 1023px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    {
                        projects_array.map((item, index) => (
                                <Box ref={(e) => (refs_array.current[index] = e)} key={item.id}>
                                    <Flex
                                    wrap="wrap" px={20} py={40} rowGap={20} justify="center"
                                    className={classes.projectInitialStyle}
                                    >
                                        <Title>{item.name}</Title>
                                        <Text size={20}>
                                            {item.desc}
                                        </Text>
                                        <Image
                                        src={item.img.src}
                                        alt={item.img.alt}
                                        />
                                    </Flex>
                                </Box>
                        ))
                    }
                </Container>
            </MediaQuery>
            {/* <MediaQuery query="(max-width: 2560px) and (min-width: 1024px)" styles={{ display: 'block' }}>
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
                            } else if (index % 2 === 0) {
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
            </MediaQuery> */}
        </>
    )
}