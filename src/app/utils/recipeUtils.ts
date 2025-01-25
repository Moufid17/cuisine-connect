
import { Recipe } from "@prisma/client";

const THRESHOLD = 0.3; // 30%

const fr_uselessWords = [
    "à", "au", "aux", "avec", "sans", "ce", "ces", "dans", "de", "des", "du", "elle", 
    "en", "et", "eux", "il", "je", "la", "le", "les", "lui", "ma", "mais", 
    "me", "même", "mon", "ne", "nos", "notre", "nous", "on", "ou", "par", 
    "pas", "pour", "qu", "que", "qui", "sa", "se", "ses", "son", "sur", "ta", 
    "te", "tes", "toi", "ton", "un", "une", "vos", "votre", "vous", "ça", 
    "c'", "d'", "j'", "l'", "m'", "n'", "s'", "t'", "y", "là", "où"
]

const en_uselessWords = [
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", 
    "he", "her", "his", "i", "in", "is", "it", "its", "me", "my", "not", 
    "of", "on", "or", "our", "she", "that", "the", "their", "them", "they", 
    "this", "to", "was", "we", "were", "what", "which", "who", "will", "with", 
    "you", "your"
]

const removeUselessWords = (words, split = false) => {
    const textList = Array.isArray(words) ? words : String(words).split(' ');
    return textList.filter(
      word =>
        fr_uselessWords.indexOf(word) === -1 &&
        en_uselessWords.indexOf(word) === -1
    ).map(word => String(word).toLowerCase());
};


const filterRecipes = (recipes: Recipe[], filters: string): Recipe[] => {

    const filtersWordsList = removeUselessWords(filters)

    const titleAndKeywordUsefullMergedByRecipe : string[][] = recipes.map((recipe: Recipe, i: number) => {
        const t = removeUselessWords(recipe.title)
        const k = removeUselessWords(recipe.keywords)
        return [...Array.from(new Set([...t, ...k]))]
    })
    
    const result = titleAndKeywordUsefullMergedByRecipe
                    .map((titleAndKeywordUsefullMerged: string[], recipeIndex: number) => {
                        // Compter les mots de `filters` présents dans `item`
                        const matchCount : number = filtersWordsList.filter(filterWord => titleAndKeywordUsefullMerged.includes(filterWord)).length;

                        // Calculer le pourcentage
                        const percentage : number = (matchCount / filtersWordsList.length) * 100;

                        // Retourner l'élément et son pourcentage s'il dépasse le seuil
                        return { recipeIndex, percentage };
                    })
                    .filter(({ percentage }) => percentage >= THRESHOLD * 100) // Filtrer selon le seuil
                    .map((d) => d.recipeIndex); 

    return result.map(i => recipes[i]);
}

export { filterRecipes }