export const calcTimestamp = (value = 0) => value * 1000;
export const getDay = (value = 0) => new Date(calcTimestamp(value)).getDay();
export const genCharArray = (charA: string, charZ: string) => {
  const arr = [];
  let j = charZ.charCodeAt(0);
  for (let i = charA.charCodeAt(0); i <= j; ++i) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
};
