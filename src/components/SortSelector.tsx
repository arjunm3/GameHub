import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store/store';


const SortSelector = () => {
    const selectedOrder=useGameQueryStore(s=>s.gameQuery.sortOrder);
    const setSortOrder=useGameQueryStore(s=>s.setSortOrder);
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Rating' },
        { value: '-released', label: 'Release Date' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
    ];
    // const { data, isLoading, error } = usePlatforms();
    // if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {sortOrders.find((order) => order.value === selectedOrder)?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}


            </MenuList>
        </Menu>
    )
}

export default SortSelector;