export const exchangeData = (index, activeData, setFiveDaysState) => {
  setFiveDaysState((prev) => {
    const copy = [...prev];
    copy.splice(index, 1);
    copy.unshift(activeData);
    copy.sort((a, b) => {
      const keyA = a.date;
      const keyB = b.date;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    return copy;
  });
};
