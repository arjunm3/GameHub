import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/newLogo1.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate=useNavigate();
  return (
    <HStack padding="10px" gap={4}>
      <Image src={logo} boxSize="50px" objectFit='cover' borderRadius="10%" cursor='pointer' onClick={()=>navigate('/')}/>
      <Link to="/">
        <Heading as={"h1"} fontSize="2xl" whiteSpace="nowrap">
          Arjun's GameHub
        </Heading>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
