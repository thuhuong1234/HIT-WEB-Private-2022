
const obj={
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}
function run(obj){
    for(const key in obj){
        console.log(key+":"+obj[key]);
    }
}
run(obj);