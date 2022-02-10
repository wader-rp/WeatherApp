const MiniWeatherIcon = ({ icon }) => (
  <img
    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
    alt={"error"}
    height={60}
    width={60}
  />
);

export default MiniWeatherIcon;
