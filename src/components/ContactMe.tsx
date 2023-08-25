import { 
    Container,
    Flex,
    Title,
    Text,
 } from "@mantine/core";
import { v4 as uuid } from "uuid";

export default function ContactMe() {
    return (
        <Container pos="relative" fluid mih="25rem" py={80}
        sx={(theme) => ({
            backgroundColor: theme.colors.gray[8],
        })}>
            <Title align="center">CONTACT ME 👋</Title>
            <Flex pos="absolute" bottom="0" left="50%"
            sx={{ 
                transform: "translate(-50%, -50%)",
                }}>
                <Text>Current build: experiment-0@{uuid()} (Aug 25, 2023)</Text>
            </Flex>
        </Container>
    )
}