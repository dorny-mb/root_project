export const genCharArray = (charA: string, charZ: string) => {
  const arr = [];
  let j = charZ.charCodeAt(0);
  for (let i = charA.charCodeAt(0); i <= j; ++i) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
};
export const extractXY = (location: string, arr: string[]) => {
  const y = parseInt(location.slice(1));
  const x = arr.indexOf(location[0]);
  return { x, y };
};
