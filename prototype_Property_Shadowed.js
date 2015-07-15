/**
 *@author attackonFourier
 *@description 关于在原型对象中属性被覆盖
*/

function Person(){
	//this.age=26;
}

Person.prototype={
	constructor:Person,
	age:24
}

var person1= new Person();
person1.age=20;
console.log(person1.age);//20
var person2= new Person();

console.log(person2.age);//24
