import { Box } from '@chakra-ui/react'
import React from 'react'

interface props {
    children: React.ReactNode
}

const GameCardContainer = ({ children }: props) => {
    return (
        <Box _hover={{ transform: "scale(1.03)",transition:'transform 0.15s ease-in'}} borderRadius={10} overflow='hidden'  >{children}</Box>
    )
}

export default GameCardContainer