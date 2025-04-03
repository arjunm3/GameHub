import React from "react";
import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Link to={`games/${game.slug}`}>
      <Card borderRadius={10} overflow="hidden">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={"image of the game"}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top}></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
