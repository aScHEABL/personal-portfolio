import React from "react";
import { 
  Container,
  Box,
  Title,
  Text,
  Anchor,
  Image
 } from '@mantine/core';
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";
import CustomDivider from "../components/CustomDivider";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Showcase from "../components/Showcase";

export default function MainPage() {
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
    return (
            <Box>
                <Sidebar />
                <Intro />
                <CustomDivider />
                {/* I could pass down objects as prop and render projects as list */}
                {/* <ProjectsShowcase /> */}
                {/* ProjectsShowcase needs a re-work */}
                {/* <Showcase projects={ projects } /> */}
            </Box>
    )
}