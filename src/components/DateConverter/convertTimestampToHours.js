import moment from "moment-timezone";

const convertTimestampToHours = (timestamp, timezone) =>
  moment
    .utc(timestamp, "X")
    .add(timezone, "seconds")
    .format("HH:mm")
    .toString();

export default convertTimestampToHours;
