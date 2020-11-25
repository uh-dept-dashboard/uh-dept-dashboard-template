
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const generateSampleSparkData = () => {
  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({ value: Math.floor(Math.random() * 101) });
  }
  return data;
}

export { generateSampleSparkData };

