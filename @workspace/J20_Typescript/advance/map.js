"use strict";
const usersa = new Map();
usersa.set("hello", { name: "ras", age: 30 });
usersa.set("hell", { name: "raws", age: 20 });
const usera = usersa.get("hell");
console.log(usera);
