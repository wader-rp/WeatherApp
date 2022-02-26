import React from "react";

const CalculateDayProgression = (sunrise, sunset, daytime, timezone) => {
  const currentTime = daytime + timezone;
  const timeFromSunset = currentTime - (sunrise + timezone);
  const timeDiff = sunset - sunrise;
  const sunProgress = Math.floor((100 * timeFromSunset) / timeDiff);
  console.log(sunProgress);

  return `${sunProgress}%`;
};

export default CalculateDayProgression;
