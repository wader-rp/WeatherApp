const calculateDayProgression = (sunrise, sunset, daytime, timezone) => {
  const currentTime = daytime + timezone;
  const timeFromSunset = currentTime - (sunrise + timezone);
  const timeDiff = sunset - sunrise;
  const res = Math.floor((100 * timeFromSunset) / timeDiff);

  if (res > 100) {
    return 100;
  }
  return res;
};

export default calculateDayProgression;
