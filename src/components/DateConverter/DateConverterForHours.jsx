import React from "react";
import Moment from "react-moment";

const DateConverterForHours = (timestamp) => {
  return (
    <Moment unix format={"hh:mm"}>
      {timestamp}
    </Moment>
  );
};
export default DateConverterForHours;
