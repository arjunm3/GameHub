import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data: screens, isLoading, error } = useScreenshots(gameId);
  console.log("checking screenshots: ", screens);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = screens?.results;
  if (!first) return null;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
      spacing={3}
    >
        {first.map((img)=>(<Image key={img.id} src={img.image}/>))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
