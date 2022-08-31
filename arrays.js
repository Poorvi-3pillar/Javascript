//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("evening"));
console.log(Array.from([3,5,7],x=>x+x));
console.log("poorvi tiwari");
// isArray 
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with
//  a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not
//     slots with actual undefined values.)

Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]

// The at() method takes an integer value and returns the item at that index,
// allowing for positive and negative integers. Negative integers count back from the last item in the array.
const a=[12,34,45,56,67]
console.log(a.at(2));
console.log([1,2,3]+[4,5,6]);// considered as string
//concating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);

// Array.filter(element , index , array)The filter() method creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
const ar=[23,45,6,7,8,9];
const result=ar.filter(a=>a<10)
console.log(result);

const b=['p','o','o','r','v','i','t','i','w','a','i','r','o'];
const duplicate=b.filter((item,index)=>{
    return (b.indexOf(item)!==index);
    // console.log(b.indexOf(item));
});
console.log(duplicate);
//difference between filter and find
//The forEach() method executes a provided function once for each array element.
const number=[2,5,3,8,7,34,78];
number.forEach(Element=>console.log(Element));

const items = ['item1', 'item2', 'item3'];
const copyItems = [];
items.forEach(item=>{
    copyItems.push(item)
    
})
console.log(copyItems);
console.log(items);
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
[1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)   // false
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
//separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log([15, 16, 17, 18, 19].reduce((previousValue, currentValue) => previousValue + currentValue, 10));
//the reverse()method reverses an array in place and returns the reference to the same array, it is destructive as it changes the array
const name=["poorvi","nikunj","nitin"];
console.log(name.reverse());
console.log(name.reverse());

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
const months = ['Jan', 'March', 'April', 'June'];
months.splice(3, 2, 'May');
console.log(months);

",,," == Array((null,'cool',false,NaN,4));
new Array([],null,undefined,null) == ",,,";
const c = [1,2,3];
let d=c.slice(0)
console.log(d[1]);