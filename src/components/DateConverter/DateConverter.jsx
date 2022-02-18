import React from "react";

const DateConverter = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const text = date.toString();
  let textfrmt = text.substring(0, 3);

  const monthFrmt = () => {
    if (date.getMonth() + 1 <= 9) {
      return "0" + (date.getMonth() + 1);
    } else {
      return date.getMonth() + 1;
    }
  };
  console.log(text);

  return (
    textfrmt +
    " " +
    date.getDate() +
    "." +
    monthFrmt(date) +
    "." +
    date.getFullYear()
  );
};

export default DateConverter;
