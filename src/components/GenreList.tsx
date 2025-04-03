import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/store";



const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const setGenreId=useGameQueryStore(s=>s.setGenreId);
  const selectedGenreId=useGameQueryStore(s=>s.gameQuery.genreId);
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((d) => (
          <ListItem key={d.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(d.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={d.id == selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(d.id)}
                variant="link"
                fontSize="lg"
              >
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
