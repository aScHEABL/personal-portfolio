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
            <MediaQuery query="(max-width: 767px) and (min-width: 359px)" styles={{ display: 'block' }}>
                <Container size="20rem" sx={{ display: 'none' }}>
                    <Title order={1} size="3.5rem">Hi, I'm Eric Trager.</Title>
                    <Title order={2} size="1.3rem" mb={48}>Student // Self-taught web developer</Title>
                    <Text>I am a third-year student studying Information Management 
                        at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                    Currently, I work as a MIS engineer intern
                    at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                    <Text>I develop quality frontend and backend applications and tools using Typescript, React, 
                    HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                </Container>
            </MediaQuery>
            <MediaQuery query="(max-width: 992px) and (min-width: 768px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="1rem" pr="10rem" sx={{ display: 'none' }}>
                    <Title order={1} size={70}>Hi, I'm Eric Trager.</Title>
                    <Title order={2} size={20} mb={48}>Student // Self-taught web developer</Title>
                    <Flex wrap="wrap">
                        <Text size={18} styles={{ flex: "1 1 100%" }}>I am a third-year student studying Information Management 
                            at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                        Currently, I work as a MIS engineer intern
                        at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>I develop quality frontend and backend applications and tools using Typescript, React, 
                        HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                    </Flex>
                </Container>
            </MediaQuery>
            <MediaQuery query="(min-width: 993px)" styles={{ display: 'block' }}>
                <Container size="100rem" px="6rem" sx={{ display: 'none' }}>
                    <Title order={1} size={70}>Hi, I'm Eric Trager.</Title>
                        <Title order={2} size={20} mb={48}>Student // Self-taught web developer</Title>
                        <Box>
                            <Text size={24} mr={500} styles={{ flex: "1 1 100%" }}>I am a third-year student studying Information Management 
                                at <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>. 
                            Currently, I work as a MIS engineer intern
                            at <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>.</Text>
                            <Text size={24} mr={500} my={20} styles={{ flex: "1 1 100%" }}>I develop quality frontend and backend applications and tools using Typescript, React, 
                            HTML/CSS, Python, Node.js, MongoDB and more.</Text>
                            <Button radius="md" size="xl">
                                Contact me
                            </Button>
                        </Box>
                </Container>
            </MediaQuery>
        </>
    )
}