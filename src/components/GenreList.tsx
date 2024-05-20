import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';
import useData from '../hooks/useData';
import useGenre, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: props) => {
    const { data, isLoading, error } = useGenre();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map((d) => (
                    <ListItem key={d.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize="32px" borderRadius={8} src={getCroppedImageUrl(d.image_background)} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={d.id == selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(d)} variant='link' fontSize='lg'>{d.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList