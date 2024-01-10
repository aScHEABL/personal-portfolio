import { Container} from "@mantine/core";
import resume from "../assets/pdf/resume.pdf"
import ColorToggle from "../components/ColorToggle";

export default function ResumePage() {

    return (
        <>
            <ColorToggle />
            <Container h="calc(100vh - 86px)">
                <object data={resume} type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href={resume}>to the PDF!</a></p>
                </object>
            </Container>
        </>
    )
}