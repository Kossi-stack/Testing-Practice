const stringLength = (string) => {
  let strLen = string.length;

  if (strLen < 1 || strLen > 10) {
    return false;
  } else if (strLen > 1 || strLen <= 10) {
    return true;
  }
};

module.exports = stringLength;