import ApiClient from "../services/api-client";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import { Genre } from "../entities/Genre";
const apiClient = new ApiClient<Genre>('/genres');

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
// const useGenre = () => ({ data: genres, isLoading: false, error: null });
// const useGenre = () => useData<Genre>("/genres");
//{
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller: AbortController = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((response) => {
//         setGenres(response.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);
//   return { genres, error, isLoading };
//};

export default useGenre;
