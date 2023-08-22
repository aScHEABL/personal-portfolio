import React from "react";
import { 
  Box,
 } from '@mantine/core';
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";
import CustomDivider from "../components/CustomDivider";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Showcase from "../components/Showcase";

export default function MainPage() {
    return (
            <Box>
                <Sidebar />
                <Intro />
                <CustomDivider />
                {/* I could pass down objects as prop and render projects as list */}
                {/* <ProjectsShowcase /> */}
                {/* ProjectsShowcase needs a re-work */}
                <Showcase />
            </Box>
    )
}