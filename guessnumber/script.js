let hearts = 6;
let goldnumber;
function rnum() {
   return Math.round(Math.random() * 100);
}

function startgame() {
 goldnumber = rnum();
   document.getElementById("first").classList.toggle("hide");
   document.getElementById("second").classList.toggle("hide");
}
function restartgame() {
 goldnumber = rnum();
   document.getElementById("status").innerHTML = "";
   document.getElementById("number").value = "";
   document.getElementById("guessbtn").classList.remove("hide")
   document.getElementById("window").classList.remove("animate__tada","animate__animated")
   hearts = 7;
   wrong();
}
//}
function remaining(a, b) {
   let remaininglives = "";
   for (let i = 1; i <= a; i++) {
      remaininglives += `<i class="fas fa-heartbeat" style="color: #ff0000"></i> `;
   }
   for (let j = 1; j <= b; j++) {
      remaininglives += `<i class="fas fa-heart-broken animate__headShake animate__fast animate__animated" style="color: #330000"></i> `;
   }
   document.getElementById("hearts").innerHTML = remaininglives;
}
function guess() {
   let num = document.getElementById("number").value;
   if (num < 0 || num > 100 || num == "") {
      thestatus("error");
      document.getElementById("number").value = "";
   } else {
      if (num > goldnumber) {
         thestatus("lower");
         wrong();
      } else if (num < goldnumber) {
         thestatus("higher");
         wrong();
      } else {
         thestatus("win");
      }
   }
}
function wrong() {
   hearts = hearts - 1;
   switch (hearts) {
      case 6:
         remaining(6, 0);
         break;
      case 5:
         remaining(5, 1);
         break;
      case 4:
         remaining(4, 2);
         break;
      case 3:
         remaining(3, 3);
         break;
      case 2:
         remaining(2, 4);
         break;
      case 1:
         remaining(1, 5);
         break;
      case 0:
         remaining(0, 6);
         thestatus("lose");
         hearts = 7;
      default:
         break;
   }
}
function thestatus(happen) {
   switch (happen) {
      case "higher":
         document.getElementById(
            "status"
         ).innerHTML = `<p class="lower animate__headShake animate__fast animate__animated">
        عدد تو
        <span style="color: red">کوچکتر</span>
        از عدد منه
     </p>`;
         break;
      case "lower":
         document.getElementById(
            "status"
         ).innerHTML = `<p class="higher animate__headShake animate__fast animate__animated">
            عدد تو
            <span style="color: red">بزرگتر</span>
            از عدد منه
         </p>`;
         break;
      case "error":
         document.getElementById(
            "status"
         ).innerHTML = `<p class="error animate__headShake animate__fast animate__animated">
            باید عددی بین
            <span style="color: red">0</span>
            تا
            <span style="color: red">100</span>
            بنویسی
         </p>`;
         break;
      case "win":
         document.getElementById("status").innerHTML = `<p class="win">
            آفرین برنده شدی 😎
         </p>`;
         document.getElementById("window").classList.add("animate__tada","animate__animated")
        // document.getElementById("window").classList.remove("animate__tada","animate__animated")
         break;
      case "lose":
         document.getElementById("status").innerHTML = `<p class="lose">
            باختی😐
            <br>
            عدد من 
            <span style="color: red">${goldnumber}</span>
            بود
         </p>`;
         document.getElementById("guessbtn").classList.add("hide")
         break;

      default:
         break;
   }
}