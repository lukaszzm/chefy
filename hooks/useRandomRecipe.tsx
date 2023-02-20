import fetcher from "../lib/fetcher";
import useSWR, { useSWRConfig } from "swr";
import { IRecipe } from "../interfaces/Recipe.interface";

export const useRandomRecipe = () => {
  const { data, error, isLoading } = useSWR<IRecipe, Error>(
    "/api/recipes/random",
    fetcher
  );
  const { mutate } = useSWRConfig();

  const refetchData = () => {
    console.log("REFETCH");
    mutate("/api/recipes/random");
  };

  return { data, error, isLoading, refetchData };
};
