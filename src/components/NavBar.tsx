import { HStack, Heading, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' />
            <Heading as={'h1'} fontSize='2xl' whiteSpace='nowrap'>Arjun's GameHub</Heading>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar