import React from 'react';

function CheckBoxIngredientes() {
  const array = [teste, teste1, teste2];
  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {array.map((Ingredient, index) => (
          <li key={ index }>
            <input type="checkbox" id={ Ingredient } name={ Ingredient } />
            <label htmlFor={ Ingredient }>{ Ingredient }</label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CheckBoxIngredientes;
