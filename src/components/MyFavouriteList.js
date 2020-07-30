import React from "react";
import FullRecipeCard from './FullRecipeCard';
import { recipes } from "../data/Recipes";
import styles from './styles.module.css';

const MyFavouriteList = () => {
    let favourites = [];
        for(let i = 0; i < 30; i++){
            favourites.push(localStorage.key(i));
        }
        
    return (
        <>

            <h1 className={styles.header}>Twoje ulubione przepisy</h1>
            <div className={styles.recipesList}>
                {
                    recipes.map(recipe => {
                        if(favourites.includes(recipe.name)){
                            return (
                                <FullRecipeCard
                                    title={recipe.name}
                                    photoURL={recipe.photoURL}
                                    servings = {recipe.servings}
                                    price = {recipe.price}
                                    readyInMinutes = {recipe.readyInMinutes}
                                    recipe = {recipe.recipe}
                                    />
                            )
                        }
                    
                    })
                }
            </div>
        </>
    )
}

export default MyFavouriteList;