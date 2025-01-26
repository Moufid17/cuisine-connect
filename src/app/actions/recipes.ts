'use server'

import { prismaClientDB } from "../lib/prismaClient";

export async function findRecipeById(id: string) {
    return await prismaClientDB.recipe.findUnique({
        where: {
          id: id,
        },
    })
}

export async function findRecipes() {
  return await prismaClientDB.recipe.findMany({
    // select: {
    //   title: true
    // },
    include: {ratings: true, comments: true},
  })
}

export async function findAllRecipes() {
    return await prismaClientDB.recipe.findMany();
}

export async function findAllRecipesForRequest() {
    return await prismaClientDB.recipe.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            keywords: true,
            time: true,
            ingredients: true,
            steps: false,
            nutriments: true,
            nutriScore: true,
            ratings: {
                select: {
                    value: true
                }
            },
        }
    });
}

export async function findByTitle(title: string) {
    return await prismaClientDB.recipe.findUnique({
        where: {
            title: title
        }
    });
}