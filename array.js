const array=[2,3,4,'Shivam'];
const arr=array;  // array use shallow copy. if we make any changes in arr it will change array//
// deep copy is like stack and shallow copy is like heap//

// console.log(arr); 

// methods//

// array.push(5);
// console.log(array);
// array.pop()
// console.log(array);

// array.unshift(6);
// console.log(array);
// array.shift();
// console.log(array);

//questions method //

//const newArr=[2,3,3,4,4,5];
// console.log(newArr.indexOf(3));

//const newArr1=newArr.join();  //converts the array into string //
//console.log(newArr1);
//console.log(typeof newArr1);

//* slice and splice* //
const num=[0,1,2,3,4,5,6,7];
console.log('A',num);
const n1=num.slice(2,5);
console.log('Slice',n1);
console.log('After Slice',num);

const n2=num.splice(2,4);

console.log('Splice',n2)
console.log('After Spilce',num);




