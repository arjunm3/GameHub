import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;