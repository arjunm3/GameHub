import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore{
    gameQuery:GameQuery;
    setGenreId:(genreId:number)=>void;
    setPlatformId:(platformId:number)=>void;
    setSortOrder:(sortOrder:string)=>void;
    setSearchText:(searchText:string)=>void;
}

const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    setGenreId:(genreId)=>set(store=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
    setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}})),
    setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}}))
}))

export default useGameQueryStore;