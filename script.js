/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let res = arr.map(function (x) {
    if (x.profession === "developer") {
      return x;
    }
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] === undefined) {
      res.pop();
    }
  }
  console.log(res);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let res = arr.forEach(function (x) {
    if (x.profession === "developer") {
      console.log(x);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEle = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEle);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession == "admin") {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 4, name: "king", age: "25", profession: "intern" },
    { id: 5, name: "khalidh", age: "28", profession: "admin" },
    { id: 6, name: "mohammad", age: "29", profession: "admin" },
  ];
  arr = arr.concat(newArray);
  console.log(arr);
}
