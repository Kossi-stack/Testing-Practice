const reverseString = (string) => {
  const reversedStr = string.split('').reverse().join('')
  return reversedStr
}

module.exports = reverseString;