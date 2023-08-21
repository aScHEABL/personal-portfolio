import { Divider, Text, Flex } from '@mantine/core';
import { LiaToolsSolid } from "react-icons/lia"

export default function CustomDivider() {
    return (
        <>
            <Divider 
            size="lg" 
            my="xl"
            orientation="horizontal"
            labelPosition="center" 
            label={
                <Flex gap={20} align="center">
                    <LiaToolsSolid size={30} />
                    <Text size={24}>Some things I've built</Text>
                </Flex>
            } 
            />
        </>
    )
}