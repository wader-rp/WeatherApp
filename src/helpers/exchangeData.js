export const exchangeData = (
  index,
  activeData,
  fiveDaysState,
  setFiveDaysState
) => {
  const newArrAdd = [...fiveDaysState];
  newArrAdd.splice(index, 1);
  if (newArrAdd.length !== 5) {
    newArrAdd.unshift(activeData);
  }
  newArrAdd.sort((a, b) => {
    const keyA = a.date;
    const keyB = b.date;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  setFiveDaysState(newArrAdd);
};
