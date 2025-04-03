import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import ApiClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store/store";
import { Game } from "../entities/Game";

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }
const apiClient = new ApiClient<Game>("/games");

const useGames = () =>
{  
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam=1}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page:pageParam
        },
      }),
      getNextPageParam:(lastPage,allPages)=>{
        return lastPage.next?allPages.length+1:undefined;
      },
      staleTime:ms('24h')
  });}
// useData<Game>(
//   "/games",
//   {
//     params: {
//       genres: gameQuery.genre?.id,
//       parent_platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     },
//   },
//   [gameQuery]
// );
//   {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller: AbortController = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((response) => {
//         setGames(response.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);
//   return { games, error, isLoading };
// };

export default useGames;
