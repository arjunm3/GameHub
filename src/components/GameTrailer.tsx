import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useTrailers(gameId);
  // console.log("checking trailer: ",trailer)
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const first = trailer?.results[0];
  if (!first) return null;
  return (
    <>
      <video src={first.data[480]} poster={first.preview} controls />
    </>
  );
};

export default GameTrailer;
