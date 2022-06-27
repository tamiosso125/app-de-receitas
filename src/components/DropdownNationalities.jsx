import React, { useEffect, useState, useContext } from 'react';
import ReceitasContext from '../context/ReceitasContext';

function DropdownNationalities() {
  const [nationalities, setNationalities] = useState({});
  const { setUrlAPI } = useContext(ReceitasContext);
  useEffect(() => {
    const fetchNationalities = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const response = await fetch(URL);
      const responseJSON = await response.json();
      setNationalities(responseJSON);
    };
    fetchNationalities();
  }, []);
  const changeUrlData = (nationality) => {
    if (nationality === 'All') {
      setUrlAPI('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      setUrlAPI(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
    }
  };
  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      onChange={ (event) => changeUrlData(event.target.value) }
    >
      <option data-testid="All-option">All</option>
      {Object.values(nationalities)[0]
        && Object.values(nationalities)[0].map(({ strArea }, index) => (
          <option
            key={ index }
            data-testid={ `${strArea}-option` }
          >
            {strArea}
          </option>
        ))}
    </select>
  );
}

export default DropdownNationalities;
