const calculateDayProgression = (sunrise, sunset, daytime, timezone) => {
  const currentTime = daytime + timezone;
  const timeFromSunset = currentTime - (sunrise + timezone);
  const timeDiff = sunset - sunrise;
  const result = Math.floor((100 * timeFromSunset) / timeDiff);

  if (result > 100) {
    return 100;
  }
  return result;
};

export default calculateDayProgression;
