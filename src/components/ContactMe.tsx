import { 
    Container,
    Flex,
    Title,
    Text,
    MediaQuery,
 } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { nanoid } from "nanoid";

export default function ContactMe() {
    return (
        <>
            <MediaQuery query="(max-width: 425px)" styles={{ display: 'block' }}>
                <Container pos="relative" fluid mih="25rem" py={80}
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <Title align="center">CONTACT ME</Title>
                    <Text size={12} pos="absolute" bottom="0" left="50%" w="80%" align="center"
                    sx={{ 
                        transform: "translate(-50%, -50%)",
                        }}>
                            Current build: {nanoid(10)} (Aug 25, 2023)
                        </Text>
                </Container>
            </MediaQuery>
        </>
    )
}