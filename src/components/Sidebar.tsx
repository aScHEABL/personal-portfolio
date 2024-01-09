import { 
    Flex,
    MediaQuery,
    ActionIcon,
    Tooltip,

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
                    <Tooltip label="This button is currently disabled">
                        <ActionIcon size="xl" variant="transparent" style={{ cursor: "not-allowed" }}>
                            <BiLogoLinkedin size="2rem" />
                        </ActionIcon>
                    </Tooltip>
                    <ActionIcon component="a" href="https://github.com/aScHEABL" size="xl" variant="transparent">
                        <BsGithub size="2rem" />
                    </ActionIcon>
                    <ActionIcon component="a" href="mailto:natothun@gmail.com?subject=Job inquiry from personal portfolio" size="xl" variant="transparent">
                        <AiOutlineMail size="2rem" />
                    </ActionIcon>
                </Flex>
            </MediaQuery>
        </>
    )
}