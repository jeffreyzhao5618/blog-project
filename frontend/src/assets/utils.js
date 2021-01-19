// get formatted date and time from Date object

export const getDate = (pre) => {
  const dt = new Date(pre);
  return `${("0" + (dt.getMonth() + 1)).slice(
    -2
  )}/${dt.getDate()}/${dt.getFullYear()}`;
};

export const getTime = (pre) => {
  const dt = new Date(pre);
  let suffix = "AM";
  let hours = dt.getHours();
  if (hours >= 12) {
    hours = hours % 12;
    suffix = "PM";
  }
  if (hours === 0) {
    hours = 12;
  }
  return `${("0" + hours).slice(-2)}:${("0" + dt.getMinutes()).slice(
    -2
  )} ${suffix}`;
};
