import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store/store';

const PlatformSelector = () => {
    const selectedPlatformId=useGameQueryStore(s=>s.gameQuery.platformId);
    const setPlatformId=useGameQueryStore(s=>s.setPlatformId);
    const { data, isLoading, error } = usePlatforms();
    const selectedPlatform=data?.results.find(p=>p.id===selectedPlatformId);
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;