/**
 *@author attackonFourier
 *@description 关于在原型对象中属性被覆盖
*/

function Person(){}

Person.prototype={
	constructor:Person,
	age:24
}

var person1= new Person();
person1.age=20;
console.log(person1.age);//20
/*输出的是实例的age属性
 说明Person原型对象的age属性被实例
 的age属性覆盖了
*/

var person2= new Person();
console.log(person2.age);//24
//输出的是Person的原型对象中的age属性

//---------------------------------------------------------------------

//如果说构造函数中也有属性的话会怎么样呢？
function Person(){
	this.age=26;
}

Person.prototype={
	constructor:Person,
	age:24
}

var person1= new Person();
person1.age=20;
console.log(person1.age);//20
/*
 我们发现实例化后的属性没有受到影响，当需要age属性
 的时候，原型链首先还是在实例的属性中搜索这个age属性
 所以我们看到person2.age的值等于20
 */
 
 var person2= new Person();
 console.log(person2.age);//26
 //构造函数定义的就是实例的属性,所以这里的person2的age属性是26
 
 delete person2.age;
 //使用delete删除实例的属性
 console.log(person2.age);//24
 //正如期待的那样,实例的属性被删除后,在原型对象处搜索到了age属性
 
 
 
