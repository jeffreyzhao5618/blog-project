// get formatted date and time from Date object

export const getDate = (pre) => {
  return `${("0" + (pre.getMonth() + 1)).slice(
    -2
  )}/${pre.getDate()}/${pre.getFullYear()}`;
};

export const getTime = (pre) => {
  let suffix = "AM";
  let hours = pre.getHours();
  if (hours >= 12) {
    hours = hours % 12;
    suffix = "PM";
  }
  if (hours === 0) {
    hours = 12;
  }
  return `${("0" + hours).slice(-2)}:${("0" + pre.getMinutes()).slice(
    -2
  )} ${suffix}`;
};
