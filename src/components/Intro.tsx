import React from "react";
import { 
    Container,
    Box,
    Title,
    Text,
    Anchor,
    MediaQuery
   } from '@mantine/core';

export default function Intro() {
    return (
        <>
            <MediaQuery largerThan="768px" styles={{ display: 'none' }}>
                <Container size="20rem">
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
            <MediaQuery smallerThan="425px" styles={{ display: 'none' }}>
                <Container size="100rem" px="8rem">
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
        </>
    )
}