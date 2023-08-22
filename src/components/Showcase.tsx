import { Container, Flex, MediaQuery } from "@mantine/core";

export default function Showcase({ projects }) {
    return (
        <>
            <MediaQuery query="(max-width: 1024px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    {projects.map((project) => {
                        return (
                            <Flex wrap="wrap" px={20} py={40} rowGap={20}>
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