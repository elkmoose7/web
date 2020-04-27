module.exports = (str) => {
  let res = str.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc
  }, {});
  console.log(JSON.stringify(
    res, null, 2));
  
}
