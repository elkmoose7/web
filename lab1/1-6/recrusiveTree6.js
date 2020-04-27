
const recrusiveTree = function *(data) {
  if (!data) { return; }
  
    for (let i = 0; i< data.length; i++){
      let val = data[i];
      yield val.id;
  
      if (val.children) {
        yield *recrusiveTree(val.children);
      }
    }
}

module.exports = recrusiveTree;