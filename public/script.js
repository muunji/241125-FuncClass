window.onload = function(){
const divTag = document.createElement("div");
const h1Tag = document.getElementsByTagName("h1")[0];
h1Tag.parentElement.append(divTag);
divTag.innerText = "Welcome!";
}