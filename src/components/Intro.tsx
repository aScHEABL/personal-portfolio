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
    Tooltip
   } from '@mantine/core';

import { useMantineTheme } from '@mantine/core';

const introText = {
    schoolLink: <Anchor href="https://www.ntub.edu.tw/" target="_blank">NTUB</Anchor>,
    companyLink: <Anchor href="https://www.feg.com.tw/en/home/index.aspx" target="_blank">Far Eastern Group</Anchor>,
    skills: ["Typescript", "React", "HTML/CSS", "Python", "Node.js", "MongoDB"],
    title: "HI, I'M ERIC.",
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
                    {/* <Title order={1} size={40} 
                    sx={(theme) => ({
                        color: theme.colorScheme === "light" ? theme.colors.black : theme.colors.white
                    })}>
                        {introText.title}
                    </Title> */}
                    {
                        theme.colorScheme === "light" ? 
                        <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=60&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
                        :
                        <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=60&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
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
                    <Tooltip label="This button is for decorative purpose">
                        <Button radius="md" size="lg">
                            {introText.btnLabel}
                        </Button>
                    </Tooltip>
                </Container>
                {/* for tablet devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 767px) and (min-width: 426px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="2rem" pr="6rem" sx={{ display: 'none' }}>
                    {/* <Title order={1} size={35}>
                        {introText.title}
                    </Title> */}
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=700&size=60&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
                        </Box>
                        :
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=700&size=60&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
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
                        <Tooltip label="This button is for decorative purpose">
                            <Button radius="md" size="lg">
                                {introText.btnLabel}
                            </Button>
                        </Tooltip>
                    </Flex>
                </Container>
                {/* for laptop devices */}
            </MediaQuery>
            <MediaQuery query="(max-width: 992px) and (min-width: 768px)" styles={{ display: 'block' }}>
                <Container size="100rem" pl="4rem" pr="8rem" sx={{ display: 'none' }}>
                    {/* <Title order={1} size={70}>
                        {introText.title}
                    </Title> */}
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=800&size=60&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
                        </Box>
                        :
                        <Box maw="20rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=800&size=60&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=500&height=60&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
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
                        <Tooltip label="This button is for decorative purpose">
                            <Button radius="md" size="xl">
                                    {introText.btnLabel}
                            </Button>
                        </Tooltip>
                    </Flex>
                </Container>
            </MediaQuery>
            {/* for desktop or larger devices */}
            <MediaQuery query="(min-width: 993px)" styles={{ display: 'block' }}>
                <Container size="100rem" px="6rem" pb="6rem" sx={{ display: 'none' }}>
                    {/* <Title order={1} size={70}>
                        {introText.title}
                    </Title> */}
                    {
                        theme.colorScheme === "light" ? 
                        <Box maw="40rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=600&size=40&duration=1500&pause=1000&color=000000&vCenter=true&repeat=false&width=450&height=40&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
                        </Box>
                        :
                        <Box maw="40rem">
                            <Image src="https://readme-typing-svg.demolab.com?font=Roboto&weight=600&size=40&duration=1500&pause=1000&color=FFFFFF&vCenter=true&repeat=false&width=450&height=40&lines=HI%2C+I'M+ERIC!" alt="Hi, I'm Eric" />
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
                            <Tooltip label="This button is for decorative purpose">
                                <Button radius="md" size="xl">
                                    {introText.btnLabel}
                                </Button>
                            </Tooltip>
                        </Box>
                </Container>
            </MediaQuery>
        </>
    )
}