"use strict";
const sumof = (user1, user2) => {
    return user1.age + user2.age;
};
const result = sumof({
    name: "hello",
    age: 11
}, {
    name: "s",
    age: 22
});
console.log(result);
