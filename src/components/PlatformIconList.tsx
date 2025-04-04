import React from 'react'
import { Platform } from "../entities/Platform";
import { HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        linux: FaLinux,
        android: FaAndroid,
        mac: FaApple,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={1} flexWrap='wrap'>
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'></Icon>)}
        </HStack>
    )
}

export default PlatformIconList