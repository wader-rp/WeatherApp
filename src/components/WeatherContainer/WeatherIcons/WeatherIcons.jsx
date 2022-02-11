const WeatherIcon = ({ icon }) => (
  <img
    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
    alt={"error"}
    height={125}
    width={125}
  />
);

export default WeatherIcon;
