// let x="HELLO WORLD";
// console.log(x.codePointAt(5));

// // String object
// const string = new String("String Object");
// const app={};
// app.init=function()
// {
//     this.status="Installed";
// }
// app.status="Paused";
// console.log(app.status);
// app.init();
// console.log(app.status);
// const surname = "FreddieMercury".substr(8, 7);
// console.log(surname.toUpperCase());

// const age = new Number(13);
// age.hasComeOfAge = function() {
//   console.log(`I am ${(this >= 18 ? 'an adult' : 'a minor')}.`);
// };

// age.hasComeOfAge(); //=> "I am a minor."

// const answer = new Boolean(true);
// answer.print = function() {
//   return this.valueOf() ? 'Yes' : 'No';
// };

// console.log(answer.print()); //=> "Yes"
// console.log(true === true);
// console.log(new String('some string') === new String('some string')); 
// const s2 = new String('2 + 2');
// console.log(eval('2*2'));
// console.log(eval(s2.valueOf()));
// //shadowing property
// const myDate = new Date(1995, 11, 17);

// console.log(myDate.getYear()); // 95

// myDate.getYear = function() {
//   console.log('something else!')
// };

// myDate.getYear();

// //Raw string-It's used to get the raw string form of template literals 
// const str = String.raw`Hi\n${2+3}!`;
// console.log(str.length);
// console.log(Array.from(str).join(','));
// const myString = 'Every green bus drives fast.';
// console.log(myString.at(-1));
// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(35, '.'));
// //sub,sup
// const superText = 'superscript';
// const subText = 'subscript';
// console.log(`This is what a ${superText.sup()} looks like.`);

// //concat
// const hello = 'Hello, ';
// console.log(hello.concat('Kevin', '. Have a nice day.'));

// console.log(typeof null === null)
// // String.includes()
// // String.startsWith()
// // String.endsWith()

// let b = "This is a nice day"
// console.log(b.substring(2,5));
// console.log(b.substr(2,5));

//
// function makestring(str)
// {
//     str.length <3? str : str.slice(0,3)+str.slice(-3);
// }
// console.log(makestring('abcdefghi'));
//write a javascript program to extract the first half of the string of even length
const firsthalf = (str)=> str.slice(0,str.length/2);
console.log(firsthalf('temp'));
console.log(firsthalf('temple'));
console.log(firsthalf('templess'));

//Given two values,write a javascript program to find out which one is closet to 100
const closet100 = (a,b)=>(100-a)<(100-b)?a:b;

console.log(closet100(99,1));
console.log(closet100(11,56));

//WAP to check if in a string a character has 2 to 4 occurences
//WAP to find the number of even digits in an array of integers 
