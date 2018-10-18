// var a = {'0': 'a', '1': 'b', '2': 'c', 'length': 3};
// function aa() {
//   console.log(arguments);
//   console.log(Object.keys(arguments));
// }
// aa('a', 'b')
// console.log(Object.keys(a));
// console.log(Object.keys(a));
// console.log(Array.prototype.slice.call(a));
// console.log(Array.from(a));
// var a = 'abc';
// console.log(a[0]);
// console.log(Array.from(a));
// console.log(Array.prototype.join.call(a, '-'));
// console.log(a);
// var b = ['a', 'b', 'c'];
// console.log(b.join('-'));
// console.log(b);
// var a = 'abc';
// console.log(a.split('').reverse().join(''));
// console.log(a.split('&'));
// var a = 500000000000000000000000;
// console.log(500000000000000000000000);
// console.log(0.0000000000000005);
// var a = 42.59;
// console.log(a.toFixed(1));
// console.log(a.toPrecision(1));
// console.log(0363);
// console.log(89 / 100);
// console.log(Math.abs(- 0.3) < Number.EPSILON);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(void 42, 42);
// console.log(isNaN('aaa'));
// console.log(1/0);
// console.log(Math.pow(2, 969));
// console.log(Math.pow(2, 970));
// console.log(Number.MAX_VALUE + Math.pow(2, 969));
// console.log(Number.MAX_VALUE + Math.pow(2, 970));
// console.log(988/Infinity);
// console.log(-988/Infinity);
// function foo(x) {
//   x.push(4);
//   console.log(x);
//   x=[4, 5, 6];
//   x.push(7);
//   console.log(x);
// }
// var a = [1, 2, 3];
// foo(a.slice());
// console.log(a);


// var aa = new Array(3);
// console.log(aa.length);
// console.log(aa);

// function c(a, b) {
//   console.log(arguments);
// }
// c(1, 2);

// let firstName = Symbol();
// let person = {};
// person['firstName'] = 'cxx1';
// person[firstName] = 'cxx';
// console.log(person.firstName);
// console.log(person[firstName]);
// function cc() {
//   console.log(person[firstName]);
// }
// cc();
// console.log(person[Symbol()]);


// let f = Symbol();
// let a = [1, 2, 3, 'a'];
// a[f] = 'bsf';
// console.log(a.length);

// function Container(param) {
//   this.member = param;
// }
// // let firstName = Symbol();
// var myContainer = new Container('abc');
// Container.prototype.rng = 'rng'
// console.log(myContainer.member);
// console.log(myContainer.rng);

// var mysym = Symbol('my own symbol');
// console.log(mysym);
// console.log(mysym.toString());
// console.log(typeof mysym);
// var a = {};
// a[mysym] = 'footar';
// console.log(Object.getOwnPropertySymbols(a));
// console.log(a);

// console.log(typeof undefined);
// function foo() {
//   a = a + 1;
// }
// var a = 1;
// console.log(foo());
// console.log(a);

// var a = 42, b;
// b = (a++, a);
// console.log(a);
// console.log(b);

// var obj = {
//   a: 42
// };
// console.log(obj.a);
// console.log(delete obj.a);
// console.log(obj.a);

// console.log([] + {});
// console.log({} + []);

// function getData() {
//   return {
//     a: 42,
//     b: 'foo'
//   };
// }
// var {a, b} = getData();
// console.log(a, b);
// {
//   console.log(typeof a);
//   console.log(typeof b);
//   let b;
// }

// function foo() {
//   try {
//     return 42;
//   }
//   finally {
//     console.log('Hello');
//   }
//   console.log('nn');
// }
// console.log(foo());

setTimeout(() => {
  setTimeout(() => {
    console.log(5000);
  }, 5000)
}, 1000);
let a = 2;
