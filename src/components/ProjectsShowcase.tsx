import { Container, Flex, MediaQuery, Text, Image, Anchor } from "@mantine/core";
export default function ProjectsShowcase() {
    return (
        <>  
            <MediaQuery query="(max-width: 1024px) and (min-width: 300px)" styles={{ display: 'block' }}>
                <Container sx={{ display: 'none' }}>
                    <Flex wrap="wrap" px={20} py={40} rowGap={20}>
                        <Text size={20}>This is an improved website from 
                        <Anchor href="https://tasters.imweb.me/">&nbsp;吃吃看Tasters</Anchor> 
                        &nbsp;at the request of the business owner</Text>
                        <Flex>
                            
                        </Flex>
                        <Image
                        src="src/assets/Screenshot_20230630_093002.png"
                        alt="a screenshot of a bakery website"
                        />
                    </Flex>
                    <Flex wrap="wrap" px={20} py={40} rowGap={20}>
                        <Text size={20}>A polish web app that displays current weather for any given city/region</Text>
                        <Image
                        src="src/assets/Screenshot-2022-11-22.PNG"
                        alt="a screenshot of weather web app"
                        />
                    </Flex>
                    <Flex wrap="wrap" px={20} py={40} rowGap={20}>
                        <Text size={20}>To do list made by react and utilizes local storage.</Text>
                        <Image
                        src="src/assets/Screenshot 2023-08-21 at 11.26.39 PM.png"
                        alt="a screenshot of to do list"
                        />
                    </Flex>
                </Container>
            </MediaQuery>
        </>
    )
}