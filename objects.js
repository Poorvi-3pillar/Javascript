//ways to create objects
//object literals
let car={
    model:'BMW',
    price:'100'
}
console.log(car.price);
//constructor
function Car(model,price)
{
    this.model=model;
    this.price=price;

}
let c1=new Car('BMW','100');
console.log(c1);
console.log(c1 instanceof Car);

//prototype
let obj={
    name:'Akshay',
    city:'Dehradun',
    getIntro:function(){
        console.log(this.name+"from"+this.city);
    }
}

let obj2={
    name:"poorvi",
    city:'jhansi'
}
obj2.__proto__=obj;
console.log(obj2.getIntro());
let a = ["1", "1", "2", "3", "3", "1"];
var unique = a.filter((item,index)=>{
    return (a.indexOf(item)===index)

});
console.log(unique);//will return array
console.log(...new Set(a));//will return elements


const alpha=['A','B','C','D','E'];
const num = [1,2,3,4,5,6];
const [m,, c,...rest]=alpha;
console.log( ...alpha,...num);
console.log(m);
console.log(c);
console.log(rest);

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
//property to variable
const { name, realName } = hero;
//rest property
//const { identifier1, identifier2, ..., identifierN } = expression;
//default values
const ro = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  const { enemies = ['Joker'] } = ro;
  enemies;     // => ['Joker']
//Alias:If you'd like to create variables of different names than the properties, then you can use the aliasing feature of object destructuring.

// const { identifier: aliasIdentifier } = expression;
// //Nested One
// const {a:{b}}=obj;

// object clone 
let ob = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var clone = Object.assign({},ob);
console.log(clone);
clone.c.age=45;
console.log(ob);