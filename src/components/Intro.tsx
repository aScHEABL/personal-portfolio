import React from "react";
import { 
    Container,
    Flex,
    Box,
    Title,
    Text,
    Anchor,
    MediaQuery,
    Button
   } from '@mantine/core';

export default function Intro() {
    return (
        <>
            {/* for phone devices */}
            <MediaQuery query="(max-width: 425px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Container size="20rem" sx={{ display: 'none' }}>
                    <Title order={1} size="3.5rem">Hi, I'm Eric Trager.</Title>
                    <Title order={2} size="1.3rem" mb={48}>Student // Self-taught web developer</Title>
                    <Text size={20} pb={20}>I am a third-year student studying Information Management 
                        at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                    Currently, I work as a MIS intern
                    at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                    <Text size={20} pb={20}>I develop quality frontend and backend applications and tools using Typescript, React, 
                    HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                    <Button radius="md" size="lg">
                        MY RESUME
                    </Button>
                </Container>
                {/* for tablet devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 767px) and (min-width: 424px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="2rem" pr="6rem" sx={{ display: 'none' }}>
                    <Title order={1} size={70}>Hi, I'm Eric Trager.</Title>
                        <Title order={2} size={20} mb={48}>Student // Self-taught web developer</Title>
                        <Flex wrap="wrap" gap={20}>
                            <Text size={18} styles={{ flex: "1 1 100%" }}>I am a third-year student studying Information Management 
                                at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                            Currently, I work as a MIS intern
                            at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                            <Text size={18} styles={{ flex: "1 1 100%" }}>I develop quality frontend and backend applications and tools using Typescript, React, 
                            HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                            <Button radius="md" size="lg">
                                MY RESUME
                            </Button>
                        </Flex>
                </Container>
                {/* for laptop devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 992px) and (min-width: 768px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="4rem" pr="8rem" sx={{ display: 'none' }}>
                    <Title order={1} size={70}>Hi, I'm Eric Trager.</Title>
                    <Title order={2} size={20} mb={48}>Student // Self-taught web developer</Title>
                    <Flex wrap="wrap" gap={20}>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>I am a third-year student studying Information Management 
                            at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                        Currently, I work as a MIS intern
                        at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>I develop quality frontend and backend applications and tools using Typescript, React, 
                        HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                        <Button radius="md" size="xl">
                                MY RESUME
                        </Button>
                    </Flex>
                </Container>
            </MediaQuery>
            {/* for desktop or larger devices */}
            <MediaQuery query="(min-width: 993px)" styles={{ display: 'block' }}>
                <Container size="100rem" px="6rem" pb="6rem" sx={{ display: 'none' }}>
                    <Title order={1} size={70}>Hi, I'm Eric Trager.</Title>
                        <Title order={2} size={20} mb={48}>Student // Self-taught web developer</Title>
                        <Box>
                            <Text size={24} mr={500}>I am a third-year student studying Information Management 
                                at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                            Currently, I work as a MIS intern
                            at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                            <Text size={24} mr={500} my={20}>I develop quality frontend and backend applications and tools using Typescript, React, 
                            HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                            <Button radius="md" size="xl">
                                MY RESUME
                            </Button>
                        </Box>
                </Container>
            </MediaQuery>
        </>
    )
}