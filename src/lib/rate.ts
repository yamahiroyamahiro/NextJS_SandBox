export const getRate = (child: number, parent: number) => {
  if (parent == 0) {
    return "0.00";
  }
  return (Math.floor((child / parent) * 10000) / 100).toFixed(2);
};

export const getRateSimple = (child: number, parent: number) => {
  if (parent == 0) {
    return 0;
  }
  return Math.floor(((child / parent) * 10000) / 100);
};
