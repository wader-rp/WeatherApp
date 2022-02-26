import React from "react";
import moment from "moment-timezone";
import Moment from "react-moment";

const DateConverterForHours = (timestamp, timezone) => {
  let x = moment.utc(timestamp, "X").add(timezone, "seconds").format("HH:mm A");
  let time = x.toString();
  return <>{time}</>;
};

export default DateConverterForHours;
