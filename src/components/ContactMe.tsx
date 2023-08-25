import { 
    Flex,
    Box,
    Title,
    Text,
    ActionIcon,
    MediaQuery,
 } from "@mantine/core";
import { nanoid } from "nanoid";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactMe() {
    return (
        <>
            {/* <MediaQuery query="(max-width: 425px)" styles={{ display: 'block' }}>
                <Container pos="relative" fluid mih="25rem" py={80}
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <Title order={2} align="center">CONTACT ME</Title>
                    <Text size={12} pos="absolute" bottom="0" left="50%" w="80%" align="center"
                    sx={{ 
                        transform: "translate(-50%, -50%)",
                        }}>
                            Current build: {nanoid(10)} (Aug 25, 2023)
                        </Text>
                </Container>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px) and (min-width: 426px)" styles={{ display: 'block' }}>
                <Container pos="relative" fluid mih="20rem" py={40}
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <Title order={2} align="center">CONTACT ME</Title>
                    <Box p={40}
                    sx={{
                        border: "1px dotted"
                    }}>

                    </Box>
                </Container>
            </MediaQuery> */}
            <MediaQuery query="(max-width: 425px)" styles={{ display: 'flex' }}>
                <Flex h={80} gap={8} justify="center" align="center" wrap="wrap"
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <ActionIcon size="xl" variant="transparent">
                        <BiLogoLinkedin size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" variant="transparent">
                        <BsGithub size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" variant="transparent">
                        <AiOutlineMail size="2rem" />
                    </ActionIcon>
                    <Text
                    >Current build: {nanoid(10)} (Aug 25, 2023)</Text>
                </Flex>
            </MediaQuery>
        </>
    )
}