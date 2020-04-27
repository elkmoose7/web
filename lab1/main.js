const task = require('./1-6/index');

//Task 1
task.randHex(10);

//Task 2
console.log(task.insertonBySort('Just', 'Monicka ', 0));

//Task 3
const ourArr = [3, 0, 2, 5, -1, 4, 1];
console.log(task.insertonBySort(ourArr));

//Task 4
const myStr = '1, 3, 4, 1, 1, 3, 4, 5';
const arr = myStr.split(', ').map(Number);
console.log(arr);
task.replyNum(arr);

//Task 5
task.daysOfYear();

//Task 6
const data = [
    { id: "0" },
    {
      id: "1",
      children: [
        {
          id: "1.1",
          children: [
            {
              id: "1.1.1",
              children: [
                {
                  id: "1.1.1.1",
                  children: [
                    { id: "1.1.1.1.1" },
                    { id: "1.1.1.1.2" },
                    { id: "1.1.1.1.3" }
                  ]
                },
                { id: "1.1.1.2" },
                { id: "1.1.1.3" }
              ]
            },
            { id: "1.1.2" },
            { id: "1.1.3" },
          ]
        },
        { id: "1.2" },
        { id: "1.3" }
      ]
    },
    { id: "2" },
    { id: "3" }
  ];

const it = task.recrusiveTree(data);
let res = it.next();

while(!res.done){
  console.log(res.value);
  res = it.next();
}
