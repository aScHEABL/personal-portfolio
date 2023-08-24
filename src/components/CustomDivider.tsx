import { Divider, Text, Flex } from '@mantine/core';
import { LiaToolsSolid } from "react-icons/lia"

interface dividerLabelProps {
    [key: string]: string,
}

export default function CustomDivider({ dividerLabel }: dividerLabelProps) {
    return (
        <>
            <Divider 
            size="lg" 
            my="xl"
            orientation="horizontal"
            labelPosition="center" 
            label={
                <Flex gap={10} align="center">
                    <LiaToolsSolid size={30} />
                    <Text size={24}>{dividerLabel}</Text>
                </Flex>
            } 
            />
        </>
    )
}