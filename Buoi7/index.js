console.log("Nguyen thi ");
var a='huong';
// / bien/
// var/let/const
console.log(a);
// data type
console.log(typeof(a));
console.log(typeof(3.3));
//object
var user={
    name:"huong",
    year:2022

}
//lấy ra name
console.log(user.name);
// object['ten_thuoc_tinh']
console.log(user[name]);
//thêm thuọc tính
user['email']="huonas@gmail.com";

//xoa
delete user['email'];

//funtion
function sayHello(){
    return "hello world";
}
var s=sayHello();
console.log(typeof(s));
var n=NaN+3;//not a number
console.log(typeof(n));
