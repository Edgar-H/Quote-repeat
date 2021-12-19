export const getRandomNumber = (number) => Math.floor(Math.random() * number);

export const getRandomColor = () => {
  const colors = [
    '#20dab7',
    '#750956',
    '#f49691',
    '#12452e',
    '#0d4177',
    '#0b8680',
    '#07c891',
    '#276e02',
    '#0051aa',
    '#146884',
    '#064635',
    '#F0BB62',
    '#009DAE',
    '#C32BAD',
  ];
  let color = colors[getRandomNumber(colors.length)];
  return color;
};
