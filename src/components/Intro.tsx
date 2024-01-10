import { 
    Container,
    Flex,
    Box,
    Title,
    Text,
    Anchor,
    MediaQuery,
    Button,
    Image,
   } from '@mantine/core';
import { Link } from 'react-router-dom';

import { useMantineTheme } from '@mantine/core';

const introText = {
    schoolLink: <Anchor href="https://www.nou.edu.tw/" target="_blank">NOU</Anchor>,
    companyLink: <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>,
    skills: ["Typescript", "React", "HTML/CSS", "Python", "Node.js", "MongoDB"],
    title: "HI, I'M JUE-MING, CHEN.",
    subTitle: "Student // Self-taught web developer",
    firstPara: function() {
        return (
            <Box>
                I am a third-year Taiwanese undergraduate student studying Information Management at {this.schoolLink}. 
                Currently, I work as a MIS intern at {this.companyLink}.
            </Box>
        )
    },
    secondPara: function() { 
        return  `I develop quality frontend and backend applications and tools using ${this.skills.join(", ")} and more.`
    },
    btnLabel: "MY RESUME"
}

export default function Intro() {
    const theme = useMantineTheme();
    return (
        <>
            {/* for phone devices */}
            <MediaQuery query="(max-width: 425px)" styles={{ display: 'block' }}>
                <Container size="20rem" sx={{ display: 'none' }}>
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=50&duration=3000&pause=1000&color=000000&width=480&height=80&lines=HI%2C+I'M+JUE-MING!" alt="HI, I'M JUE-MING, CHEN!" />
                        </Box>
                        :
                        <Box maw="200rem">
                            <Image src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=50&duration=3000&pause=1000&color=FFFFFF&width=480&height=80&lines=HI%2C+I'M+JUE-MING!" alt="HI, JUE-MING, CHEN!" />
                        </Box>
                    }
                    <Title order={2} size="1.3rem" mb={25}>
                        {introText.subTitle}
                    </Title>
                    <Text size={20} pb={20}>
                        {introText.firstPara()}
                    </Text>
                    <Text size={20} pb={20}>
                        {introText.secondPara()}
                    </Text>
                    <Button component={Link} to="/resume" target="_blank" radius="md" size="lg">
                        {introText.btnLabel}
                    </Button>
                </Container>
                {/* for tablet devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 767px) and (min-width: 426px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="2rem" pr="6rem" sx={{ display: 'none' }}>
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=60&duration=3000&pause=1000&color=000000&vCenter=true&repeat=false&width=820&height=60&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                        :
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=60&duration=3000&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=820&height=60&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                    }
                    <Title order={2} size={20} mb={48}>
                        {introText.subTitle}
                    </Title>
                    <Flex wrap="wrap" gap={20}>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>
                            {introText.firstPara()}
                        </Text>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>
                            {introText.secondPara()}
                        </Text>
                        <Button component={Link} to="/resume" target="_blank" radius="md" size="lg">
                            {introText.btnLabel}
                        </Button>
                    </Flex>
                </Container>
                {/* for laptop devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 992px) and (min-width: 768px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="4rem" pr="8rem" sx={{ display: 'none' }}>
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=800&size=60&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=800&height=60&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                        :
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=800&size=60&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=800&height=60&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                    }
                    <Title order={2} size={20} mb={48}>
                        {introText.subTitle}
                    </Title>
                    <Flex wrap="wrap" gap={20}>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>
                            {introText.firstPara()}
                        </Text>
                        <Text size={18} styles={{ flex: "1 1 100%" }}>
                            {introText.secondPara()}
                        </Text>
                        <Button component={Link} to="/resume" target="_blank" radius="md" size="xl">
                                {introText.btnLabel}
                        </Button>
                    </Flex>
                </Container>
            </MediaQuery>
            {/* for desktop or larger devices */}
            <MediaQuery query="(min-width: 993px)" styles={{ display: 'block' }}>
                <Container size="100rem" px="6rem" pb="6rem" sx={{ display: 'none' }}>
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="40rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=40&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=650&height=40&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                        :
                        <Box maw="40rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=40&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=650&height=40&lines=HI%2C+I'M+JUE-MING,+CHEN!" alt="HI, I'M ERIC!" />
                        </Box>
                    }
                    <Title order={2} size={20} mb={48}>
                        {introText.subTitle}
                    </Title>
                        <Box>
                            <Text size={24} mr={500}>
                                {introText.firstPara()}
                            </Text>
                            <Text size={24} mr={500} my={20}>
                                {introText.secondPara()}
                            </Text>
                            <Button component={Link} to="/resume" target="_blank" radius="md" size="xl">
                                {introText.btnLabel}
                            </Button>
                        </Box>
                </Container>
            </MediaQuery>
        </>
    )
}