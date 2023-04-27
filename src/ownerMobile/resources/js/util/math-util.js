export const randomIntRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
export const randomSort = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
