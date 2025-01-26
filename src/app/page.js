'use client'
import * as React from "react";
import { useSession } from 'next-auth/react';
import {
  Box,
  Sheet,
  Grid,
  Typography,
  Input,
  Stack,
  Button,
  CircularProgress,
} from "@mui/joy";

import RecipeCard from "./components/RecipeCard";
import useRecipeStore from "../../store/recipeStore";
import useFavoriteStore from "../../store/favoriteStore";
import { filterRecipes } from "./utils/recipeUtils";


export default function Home() {
  const {data: session} = useSession()
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [datas, setDatas] = React.useState( {
    initials: [],
    filtered: [],
  });
  const { recipes, getRecipes } = useRecipeStore((state) => state)
  const { items, getFavorites } = useFavoriteStore((state) => state)


  const updateSearch = React.useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const onSubmitfilterRecipes = React.useCallback((event) => {
    event.preventDefault();
    setDatas(prev => ({
      ...prev,
      filtered: (search.length > 0) ? filterRecipes(prev.initials, search) : prev.initials
    }))
    setIsLoading(false)
  }, [search])


  React.useEffect(() => {
    if (recipes.length <= 0) {      
      getRecipes();
    }
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    if (recipes && recipes.length > 0){
      setDatas({initials: recipes, filtered: recipes})
      setIsLoading(false)
    }
  }, [recipes])

  React.useEffect(() => {
    if (session && session.user){
      getFavorites()
    }
  }, [session?.user])

  return ( 
    <Box sx={{ gap: 2, m: 2, bgcolor: "white" }} justifyContent="space-between">
      <Stack component="form" spacing={1} onSubmit={onSubmitfilterRecipes}>
        <Input
          label="Recherche"
          placeholder="Une recette à base du poisson colin..."
          autoFocus
          value={search}
          onChange={updateSearch}
        />
        <Button type="submit" variant="plain">
          Rechercher
        </Button>
      </Stack>
      <Box>
        <Typography level="h3" sx={{ mb: 2 }}>
          {" "}
          Les Recettes
        </Typography>
        {!isLoading && datas.filtered.length >= 0  ? (
          <Grid container spacing={2} sx={{ flexGrow: 1 , gap: 2, justifyContent: "space-between"}}>
            {datas.filtered.map((recipe) => (
              <RecipeCard key={recipe.id} data={recipe} favorites={items} />
            ))}
          </Grid>
        ) : (
            <Box>
              <Typography textAlign="center">Aucune recette trouvée</Typography>
            </Box>
          )
        }
      </Box>
    </Box>
  );
}
