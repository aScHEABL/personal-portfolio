import { Container, ColorScheme } from "@mantine/core";
import PDF from "../components/PDF";
import resume from "../assets/pdf/resume.pdf"
import { useEffect } from "react";
import { useLocalStorage, useColorScheme } from "@mantine/hooks";

export default function ResumePage() {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: preferredColorScheme,
        getInitialValueInEffect: true,
    })
    useEffect(() => {
        console.log("test");
        setColorScheme("dark");
    }, [])
    return (
        <Container size="xs">
            <PDF pdfFile={resume} />
        </Container>
    )
}