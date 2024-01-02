export const convertDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const text = date.toString();
  let dayName = text.substring(0, 3);

  const getMonthNumberFormatted = () => {
    const correctMonthNumber = date.getMonth() + 1;
    let monthNumberFormatted = correctMonthNumber;

    if (correctMonthNumber <= 9) {
      monthNumberFormatted = `0${correctMonthNumber}`;
    }
    return monthNumberFormatted;
  };
  return `${dayName} ${date.getDate()}.${getMonthNumberFormatted()}.${date.getFullYear()}`;
};
