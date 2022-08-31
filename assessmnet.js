console.log(x);
  x=10;
// if we'll not give x  any type like var or anything then also it'll show refrence error

func();
function func()
{
    const a="hello world";
    console.log(a);
}
// this statement is valid becoz objects or arrays uses refrences to store values as length is dynamic it can change
const a=[1,2,3];
a.push(4);
// ar=['p','o','o','r','v','i']
// Number  + Number  -> addition
// Boolean + Number  -> addition
// Boolean + Boolean -> addition
// Number  + String  -> concatenation
// String  + Boolean -> concatenation
// String  + String  -> concatenation
[0] == ''  // -> false
[''] == 0  // -> true
'222' - -'111' // -> 333
