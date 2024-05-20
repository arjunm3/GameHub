import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGenre = () => useData<Platform>("/platforms/lists/parents");

export default useGenre;
