import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index}
                className={ingredient.prepared ? 'prepared' : ''}
                onClick={() => props.onClick(index)}
            >
                {ingredient.name}
            </li>
        );
    });

    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredientListItems}
            </ul>
        </div>
    );
}

export default IngredientList;