import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store/store';


const GameHeading = () => {
    const genreId=useGameQueryStore(s=>s.gameQuery.genreId);
    const platformId=useGameQueryStore(s=>s.gameQuery.platformId);
    const platform=usePlatform(platformId);
    const genre=useGenres(genreId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
    return (
        <Heading as={'h1'} marginLeft={9} marginY={5} fontSize='5xl'>{heading}</Heading>
    )

}

export default GameHeading