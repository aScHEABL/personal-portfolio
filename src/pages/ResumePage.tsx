import { Container } from "@mantine/core";
import PDF from "../components/PDF";
import resume from "../assets/pdf/resume.pdf"

export default function ResumePage() {
    return (
        <Container style={{ minHeight: "150vh" }} size="xs">
            <PDF pdfFile={resume} />
        </Container>
    )
}