import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ApiClient from '../services/api-client'
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>('/games');
const useGame = (slug:string) => 
     useQuery({
        queryKey:['games',slug],
        queryFn:()=>apiClient.get(slug)
    })


export default useGame;