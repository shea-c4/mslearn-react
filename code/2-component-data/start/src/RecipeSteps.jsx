import React from 'react';

function RecipeSteps(props) {
    const recipeStepsItems = props.recipeSteps.map((step, index) => {
        return (
            <li key={index}>{step}</li>
        );
    });
    return (
        <div>
            <h2>Recipe Steps</h2>
            <ol>
                {recipeStepsItems}
            </ol>
        </div>
    );
}

export default RecipeSteps;