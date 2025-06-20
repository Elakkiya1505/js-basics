
function add(a,b){
    console.log(a+b);
}
    let newObject = {
    name:"gopzzz",
    age: 19,
    func: (a,b) =>{
        console.log(a+b);
    },
};
console.log(newObject.name);
console.log(newObject.age);
newObject.func(2,3);


    let person = {
        name:"gopzzz",
        age:25,
    };
   let newDetails = {
    ...person,
    role: "developer",
    company:"ABC Pvt Ltd",
    isMarried: false,
    salary:2.5,
   };
   
console.log(newDetails);