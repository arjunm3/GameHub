// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => ({ data: genres, isLoading: false, error: null });
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
