import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const searchText = React.useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (searchText.current) {
                onSearch(searchText.current.value);
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchText} borderRadius={20} placeholder='Search games...' variant={'filled'} />
            </InputGroup>
        </form>
    )
}

export default SearchInput