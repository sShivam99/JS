const num =[1,2,3,4,5]

// take each value of array.
for (const element of num) {
    //console.log(element);
}

// iterate over the array.

num.forEach(element => {
    //console.log(element*element);
});

// takes index of array.
for (const key in num) {       
    //console.log(num[key]);
}

// map don't take dupliacte values. //
const map=new Map();
map.set('1',1);
map.set('2',4);
map.set('3',9);
map.set(1,1);

// console.log(map);

// map is iterable with for of loop //
for (const [key,value] of map) {
   // console.log(key,'-',value);
}

// map is not iterable using for in loop //

for (const key in map) {
   //console.log(key);
}

const obj={
    name:'Shivam',
    age:25,
    city:'Varanasi'
}

// obj is not iterable with for of loop //
// for (const element of obj) {
    // console.log(element);
// }

// for iterating object we need for in loop //
for (const key in obj) {
    console.log(obj[key]);   
}