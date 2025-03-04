interface User {
    name:string;
    age: number;
}
const sumof = (user1:User , user2:User ) => {
  return user1.age + user2.age;
}

const result = sumof({
    name:"hello",
    age: 11
}, {
    name:"s",
    age: 22
})
console.log(result)