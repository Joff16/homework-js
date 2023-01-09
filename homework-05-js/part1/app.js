document.getElementById("myTitle").innerText = `I agree, it's a cool page`;


let paragraphs = document.getElementsByClassName("paragraph");

paragraphs[0].innerText = `Let's make it harder`;
paragraphs[1].innerText = `Challange accpeted`;


document.getElementsByTagName("text")[0].innerText = `Is "challange accepted" written corect`;
let parent = document.getElementsByClassName("anotherDiv")[0].nextElementSibling;



parent.firstElementChild.innerText = `Done`;
parent.lastElementChild.innerText = `Done again`;