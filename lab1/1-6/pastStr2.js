module.exports = (mainStr, insStr, pos) => {
  if (typeof(pos) === 'undefined' ) {
      pos = 0;
  }
  if (typeof(insStr) === 'undefined' ) {
    insStr = '';
}
  return mainStr.slice(0, pos) + insStr + mainStr.slice(pos);
}

