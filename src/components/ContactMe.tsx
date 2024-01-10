import { 
    Flex,
    Text,
    ActionIcon,
    MediaQuery,
    Tooltip,
 } from "@mantine/core";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactMe() {
    return (
        <>
            <MediaQuery query="(max-width: 425px)" styles={{ display: 'flex' }}>
                <Flex h={80} columnGap={8} justify="center" align="center" wrap="wrap"
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <Tooltip label="This button is currently disabled">
                        <ActionIcon size="xl" variant="transparent" sx={{ color: "white", cursor: "not-allowed" }}>
                            <BiLogoLinkedin size="2rem" />
                        </ActionIcon>
                    </Tooltip>
                    <ActionIcon component="a" href="https://github.com/aScHEABL" target="_blank" size="xl" variant="transparent">
                        <BsGithub size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" variant="transparent">
                        <AiOutlineMail size="2rem" />
                    </ActionIcon>
                    <Text
                    >Current build: 6hltral9E_ (Aug 25, 2023)</Text>
                </Flex>
            </MediaQuery>
            <MediaQuery query="(max-width: 993px) and (min-width: 426px)" styles={{ display: 'flex' }}>
                <Flex h={80} columnGap={8} justify="center" align="center" wrap="wrap"
                sx={(theme) => ({
                    display: 'none',
                    backgroundColor: theme.colors.gray[8],
                })}>
                    <ActionIcon size="xl" variant="transparent" sx={{ color: "white", cursor: "not-allowed" }}>
                        <BiLogoLinkedin size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" component="a" href="https://github.com/aScHEABL" target="_blank" variant="transparent" 
                    sx={{ color: "white" }}>
                        <BsGithub size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" component="a" 
                    href="mailto:natothun@gmail.com?subject=Job inquiry from personal portfolio" target="_blank" variant="transparent" 
                    sx={{ color: "white" }}>
                        <AiOutlineMail size="2rem" />
                    </ActionIcon>
                    <Text size={20} align="center" color="white" sx={{ flex: "1 1 100%" }}
                    >Current build: Ua9YCgc5OJ (Aug 28, 2023)</Text>
                </Flex>
            </MediaQuery>
            <MediaQuery query="(min-width: 994px)" styles={{ display: 'flex' }}>
                <Flex h={60} columnGap={8} justify="center" align="center" wrap="wrap"
                    sx={(theme) => ({
                        display: 'none',
                        backgroundColor: theme.colors.gray[8],
                    })}>
                        <Text size={20} align="center" color="white"
                        sx={{ 
                            flex: "1 1 100%",
                         }}
                        >Current build: 0886f3365e32 (Jan 10th, 2024)</Text>
                </Flex>
            </MediaQuery>
        </>
    )
}