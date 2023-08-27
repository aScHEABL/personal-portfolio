import { 
  Box,
 } from '@mantine/core';
import Intro from "../components/Intro";
import Sidebar from "../components/Sidebar";
import CustomDivider from "../components/CustomDivider";
import Showcase from "../components/Showcase";
import WorkExperience from "../components/WorkExperience";
import ContactMe from '../components/ContactMe';
import ShowcaseWIP from '../components/ShowcaseWIP';

export default function MainPage() {
    return (
            <Box>
                <Sidebar />
                <Intro />
                <CustomDivider dividerLabel={"Some things I've built"} />
                <Showcase />
                {/* <ShowcaseWIP /> */}
                <CustomDivider dividerLabel={"My work experience"} />
                <WorkExperience />
                <ContactMe />
            </Box>
    )
}