let x="HELLO WORLD";
console.log(x.codePointAt(5));

// String object
const string = new String("String Object");
const app={};
app.init=function()
{
    this.status="Installed";
}
app.status="Paused";
console.log(app.status);
app.init();
console.log(app.status);
const surname = "FreddieMercury".substr(8, 7);
console.log(surname.toUpperCase());

const age = new Number(13);
age.hasComeOfAge = function() {
  console.log(`I am ${(this >= 18 ? 'an adult' : 'a minor')}.`);
};

age.hasComeOfAge(); //=> "I am a minor."

const answer = new Boolean(true);
answer.print = function() {
  return this.valueOf() ? 'Yes' : 'No';
};

console.log(answer.print()); //=> "Yes"
console.log(true === true);
console.log(new String('some string') === new String('some string')); 
const s2 = new String('2 + 2');
console.log(eval('2*2'));
console.log(eval(s2.valueOf()));
//shadowing property
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

myDate.getYear();

//Raw string-It's used to get the raw string form of template literals 
const str = String.raw`Hi\n${2+3}!`;
console.log(str.length);
console.log(Array.from(str).join(','));
const myString = 'Every green bus drives fast.';
console.log(myString.at(-1));
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(35, '.'));
//sub,sup
const superText = 'superscript';
const subText = 'subscript';
console.log(`This is what a ${superText.sup()} looks like.`);

//concat
const hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'));