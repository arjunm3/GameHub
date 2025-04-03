import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const searchText = React.useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.current) {
      setSearchText(searchText.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchText}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
