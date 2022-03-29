import { DataDisplay, DataInfo } from "./DetailsBox/DetailsBoxStyled";

export const WeatherContainerDetailsData = (props) => {
  return (
    <DataDisplay>
      <DataInfo>{props.desc}</DataInfo>
      {props.descValue}
    </DataDisplay>
  );
};
