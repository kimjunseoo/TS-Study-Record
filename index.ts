//rest parameter
function 함수(...a : number[]){
    console.log(a)
};

함수(1,2,3,4,5,6);
//결과 : [1,2,3,4,5,6]

//spread operator
let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr, ...arr2];

console.log(arr3);
//결과 : [1,2,3,4,5]

//destructing
let [ 변수1, 변수2 ] = ["안녕", 100];

console.log(변수1);
//결과 : "안녕"

let { student, age } = { student: true, age: 20 };