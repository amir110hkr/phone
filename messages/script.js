function chat(chatnumber){
console.log(chatnumber)
document.getElementById("messagebox").classList.toggle("hide")
document.getElementById("topnav").classList.toggle("hide")
document.getElementById(chatnumber).classList.toggle("hide")
}