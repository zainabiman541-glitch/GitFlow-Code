import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    getPokemonList: build.mutation({
      query: (limit = 100) => ({
        url: `pokemon?limit=${limit}`, 
        method: 'GET',
      }),
    }),
    getPokemonDetail: build.query({
        query: (name) => `pokemon/${name}`,
})
})
})

export const { useGetPokemonListMutation , useGetPokemonDetailQuery} = pokemonApi;
