document.getElementByTagName("li")[2].style.color= "purple"
document.getElementsByClassName("btn")[0].style.color= "purple"
//even if i select by class name it still going to be converted into an array
document.getElementById("btn")[0].style.color= "purple"// only one id so id should be unique (singular)
document.querySelector("button")
document.querySelector("#btn")//id
document.querySelector(".btn")//class
document.querySelector("button.btn")//class btn which is of a button
document.querySelector("#list a")//anchor tag inside a list id
document.querySelectorAfll("#list .item")//all of the classes in list id as an array
//folows camel casing 


document.querySelector("button").classList.add("invisible")//on and off
document.querySelector("button").classList.toggle("invisible")//on and off automatically

document.querySelector("#title").innerHTML = "<em>Hello World!</em>";

document.querySelector("#title").textContent = "Hello World!";

document.querySelector("a").setAttribute("href", "httpt://www.bing.com")




