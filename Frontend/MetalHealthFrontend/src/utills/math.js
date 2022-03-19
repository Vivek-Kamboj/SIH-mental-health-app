export const compare = (a, b) => {
  if (a.isActivated === b.isActivated) return 0;
  else if (a.isActivated === true) return -1;
  else if (b.isActivated === true) return 1;
  return 0;
};
