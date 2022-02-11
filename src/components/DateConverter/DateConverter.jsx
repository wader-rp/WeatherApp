import React from "react";

const DateConverter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let text = date.toString();
  console.log(text);
  let textfrmt = text.substring(0, 3);
  return (
    textfrmt +
    " " +
    date.getDate() +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getFullYear()
  );
};

export default DateConverter;
