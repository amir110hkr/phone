let element = document.getElementsByClassName("number");
let txt = document.getElementById("pressed");
let lock1 = document.getElementsByClassName("lockimg")[0];
let lock2 = document.getElementsByClassName("lockimg")[1];
for (let index = 0; index < element.length; index++) {
   element[index].addEventListener("click", myFunction);
   function myFunction() {
      txt.innerHTML += element[index].innerHTML;
      if (txt.innerHTML.length == 4) {
         if (txt.innerHTML == "1383") {
            lock1.classList.toggle("hide");
            lock2.classList.toggle("hide");
            setTimeout(correctpass, 2000);
         } else {
            document
               .getElementsByClassName("lockimg")[0]
               .classList.add("animate__animated", "animate__headShake");
            setTimeout(function () {
               document
                  .getElementsByClassName("lockimg")[0]
                  .classList.remove("animate__animated", "animate__headShake");
            }, 800);
            txt.innerHTML = "";
         }
      }
   }
}
function correctpass() {
   document.getElementById("lockscreen").classList.add("hide");
}
function openpage(link) {
   if (link == "chrome") {
      document.getElementById("homepage").classList.add("hide");
      document.getElementById("iframe").classList.toggle("hide");
      document.getElementById(
         "iframe"
      ).src = `https://www.google.com/search?igu=1`;
   } else {
      document.getElementById("homepage").classList.add("hide");
      document.getElementById("iframe").classList.toggle("hide");
      document.getElementById("iframe").src = `${link}/index.html`;
   }
}
function homescreen() {
   document.getElementById("homepage").classList.remove("hide");
   if (!document.getElementById("iframe").classList.contains("hide")) {
      document.getElementById("iframe").classList.toggle("hide");
   }
}
