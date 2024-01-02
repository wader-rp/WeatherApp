import { CitiesListStyled } from "../../style/CitiesListStyled";
import { CityStyled } from "../../style/CityDisplayStyled";
import { cities } from "../../data/cities";

export const CitiesList = ({ setCity, setIsCitiesListOpen }) => {
  const handleSetCity = (city) => {
    setCity(city);
    setIsCitiesListOpen(false);
  };

  return (
    <CitiesListStyled>
      {cities.map((city) => (
        <CityStyled key={city} onClick={() => handleSetCity(city)}>
          {city}
        </CityStyled>
      ))}
    </CitiesListStyled>
  );
};

export default CitiesList;
