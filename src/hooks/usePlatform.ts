import usePlatforms from "./usePlatforms";

const usePlatform = (id?:number) => {
    const { data, isLoading, error } = usePlatforms();
    return data?.results.find(p=>p.id===id);
}

export default usePlatform