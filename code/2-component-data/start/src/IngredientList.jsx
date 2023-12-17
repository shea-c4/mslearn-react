import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    // Create the list items using map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <div>
            <h2>Ingredient List</h2>
            <ul>
                { ingredientListItems }
            </ul>
        </div>
    );
}

export default IngredientList;