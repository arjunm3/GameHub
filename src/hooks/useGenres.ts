import useGenre from "./useGenre";

const useGenres = (id?:number) => {
  const{data:genreData}=useGenre();
  return genreData?.results.find(g=>g.id===id)
}

export default useGenres