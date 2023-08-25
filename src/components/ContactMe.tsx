import { 
    Container,
    Title,
 } from "@mantine/core"

export default function ContactMe() {
    return (
        <Container fluid sx={(theme) => ({
            backgroundColor: theme.colors.gray[8],
        })}>
            <Title align="center">Hello World</Title>
        </Container>
    )
}