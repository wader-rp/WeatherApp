import React from "react";
import moment from "moment-timezone";

const dateConverterForHours = (timestamp, timezone) => {
  let x = moment.utc(timestamp, "X").add(timezone, "seconds").format("HH:mm");
  let time = x.toString();
  return <>{time}</>;
};

export default dateConverterForHours;
