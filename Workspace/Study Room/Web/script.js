var X1 =() => {console.log("TEST X1")}
X1();

var X2= a => a;
console.log(X2("TEST X2"));

var X3= (a,b,c) => (a<<b<<c)>>2;

console.log("TEST X3 "+ X3(1,2,3));
