import React from "react";
import ColorToggle from "../components/ColorToggle";
import { 
  Container,
  Title,
  Text,
  Anchor
 } from '@mantine/core';

export default function MainPage() {
    return (
            <Container>
                <ColorToggle />
                <Title order={1}>Hi, I'm Eric Trager.</Title>
                <Title order={2}>Student // Self-taught web developer // MIS specialist</Title>
                <Text>I am a third-year student studying Information Management at <Anchor href="https://www.ntub.edu.tw/">NTUB</Anchor>. </Text>
            </Container>
    )
}