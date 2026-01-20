module.exports = (text, map) => {
  return text
    .toLowerCase()
    .split("")
    .map(c => map[c] || c)
    .join("");
};