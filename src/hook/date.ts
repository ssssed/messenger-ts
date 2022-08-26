export const dateForm = () => {
  const date = new Date();
  return `${
    `${date.getHours()}`.length < 2 ? '0' + date.getHours() : date.getHours()
  }:${
    `${date.getMinutes()}`.length < 2
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;
};

export const getTimes = (time?: string | undefined): number => {
  const date = new Date();
  if (time) {
    const totalTime =
      +time.split(':')[0] * 60 * 60 * 60 * 60 +
      +time.split(':')[1] * 60 * 60 * 60;
    return totalTime;
  } else {
    return date.getTime();
  }
};
