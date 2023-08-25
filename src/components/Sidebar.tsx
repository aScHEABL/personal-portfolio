import { 
    Flex,
    MediaQuery,
    ActionIcon,

} from "@mantine/core";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";


export default function Sidebar() {
    return (
        <>
            <MediaQuery query="(min-width: 993px)" styles={{ display: 'flex' }}>
                <Flex direction="column" rowGap={16}
                     sx={{ 
                            display: "none",
                            zIndex: 9999,
                            position: "fixed",
                            paddingLeft: "1rem",
                            paddingTop: "18rem",
                        }}>
                    <ActionIcon size="xl" variant="transparent">
                        <BiLogoLinkedin size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" variant="transparent">
                        <BsGithub size="2rem" />
                    </ActionIcon>
                    <ActionIcon size="xl" variant="transparent">
                        <AiOutlineMail size="2rem" />
                    </ActionIcon>
                </Flex>
            </MediaQuery>
        </>
    )
}