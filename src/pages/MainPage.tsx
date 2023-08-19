import React from "react";
import { 
  Container,
  Box,
  Title,
  Text,
  Anchor
 } from '@mantine/core';
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
    return (
            <Box>
                <Sidebar />
                <Intro />
            </Box>
    )
}