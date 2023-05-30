let places = [
   "رستوران",
   "ورزشگاه",
   "بقالی",
   "استادیوم",
   "طلا فروشی",
   "بانک",
   "کتاب‌فروشی",
   "پارک",
   "شهرداری",
   "موزه",
   "تئاتر",
   "سینما",
   "کافه",
   "آرایشگاه",
   "فروشگاه لباس",
   "باغ",
   "گلف",
   "آسایشگاه",
   "هواپیمایی",
   "بنگاه تجاری",
   "فروشگاه الکترونیکی",
   "خانه",
   "کارخانه",
   "آژانس مسافرتی",
   "فروشگاه خوراکی",
   "فروشگاه لوازم خانگی",
   "کارگاه چوب",
   "آتلیه عکاسی",
   "استودیو ضبط صدا",
   "سالن آرایش",
   "فروشگاه جواهرات",
   "کلینیک دندان‌پزشکی",
   "آموزشگاه رانندگی",
   "مدرسه",
   "دانشگاه",
   "کتابخانه",
   "مرکز تجاری",
   "نساجی",
   "آهنگری",
];
let place;
let players = [];
let spyroles = [];
let spynames = "";
let playermany = 3;
let spymany = 1;
let advancemode = false;
function setplace() {
   place = places[Math.floor(Math.random() * places.length)];
}

function skip1() {
   document.getElementById("first").classList.toggle("hide");
   document.getElementById("second").classList.toggle("hide");
}
function back1() {
   document.getElementById("first").classList.toggle("hide");
   document.getElementById("second").classList.toggle("hide");
}
function skip2() {
   playermany = document.getElementById("playermany").value;
   spymany = document.getElementById("spymany").value;
   let errortext = "";
   if (!(parseInt(spymany) >= 1)) {
      errortext = "): نمی تونیم بدون جاسوس بازی کنیم ";
      Swal.fire({
         icon: "error",
         title: "مشکلی پیش اومده",
         text: errortext,
      });
   } else if (!(parseInt(playermany) >= 1)) {
      errortext = "): نمی تونیم بدون بازیکن بازی کنیم ";
      Swal.fire({
         icon: "error",
         title: "مشکلی پیش اومده",
         text: errortext,
      });
    } else if (playermany>30) {
         errortext = "فکر نمیکنم جاسوس خان مناسب این تعداد بازیکن باشه ، ممکنه مرورگر شما کرش کنه";
         Swal.fire({
            icon: "error",
            title: "مشکلی پیش اومده",
            text: errortext,
         });
   } else if (
      !(parseInt(playermany) - parseInt(spymany) >= parseInt(spymany) + 1)
   ) {
      errortext =
         "تعداد جاسوس خیلی زیاده ! حداقل باید یک شهروند بیشتر از جاسوس ها تو بازی باشن";
      Swal.fire({
         icon: "error",
         title: "مشکلی پیش اومده",
         text: errortext,
      });
   } else {
      document.getElementById("second").classList.toggle("hide");
      document.getElementById("third").classList.toggle("hide");
      if (document.getElementById("gamemode").value == "advance") {
         advancemode = true;
      } else {
         advancemode = false;
      }
      console.log("true or false ?? " + advancemode);
      playerarea();
   }
}
function showhelp() {
   document.getElementsByClassName("showhelp")[0].classList.toggle("hide");
}
function skip3() {
   let txt;
   players = [];
   let notempty = 0;
   for (let y = 0; y < playermany; y++) {
      if (!(document.getElementById("player" + (y + 1)).value == "")) {
         players.push(document.getElementById("player" + (y + 1)).value);
         notempty++;
      }
   }
   if (playermany == notempty) {
      if (advancemode == false) {
         txt = "کلاسیک";
      }
      if (advancemode == true) {
         txt = "پیشرفته";
      }
      document.getElementById("window").classList.toggle("roleplay");
      document.getElementById("third").classList.toggle("hide");
      document.getElementById("forth").classList.toggle("hide");
      document.getElementById("readysm").innerHTML = `
         <p class="readysm"> قراره با 
         <span style="color:#4cc9ff">${playermany}</span>
          بازیکن و 
          <span style="color:#4cc9ff">${spymany}</span>
           جاسوس در حالت 
           <span style="color:#4cc9ff">${txt}</span>
            بازی کنیم</p>    `;
   } else {
      Swal.fire({
         icon: "error",
         title: "مشکلی پیش اومده",
         text: "باید همه بازیکن ها اسم داشته باشند",
      });
   }
}
function back2() {
   document.getElementById("third").classList.toggle("hide");
   document.getElementById("second").classList.toggle("hide");
}
function playerarea() {
   let players = document.getElementById("playerarea");
   players.innerHTML = ``;
   for (let i = 0; i < playermany; i++) {
      players.innerHTML += `<div>
     <p>${i + 1} اسم بازیکن</p>
     <input value="" required id="player${i + 1}" type="text">
  </div>`;
   }
}
let playerbox = document.getElementById("playerbox");
function back3() {
   if (document.getElementById("prestart").classList.contains("hide")) {
      document.getElementById("prestart").classList.toggle("hide");
   }
   if (!(document.getElementById("restart").classList.contains("hide"))) {
      document.getElementById("restart").classList.toggle("hide");
   }
   if (!(document.getElementById("timer").classList.contains("hide"))) {
      document.getElementById("timer").classList.toggle("hide");
   }
   document.getElementById("window").classList.toggle("roleplay");
   document.getElementById("forth").classList.toggle("hide");
   document.getElementById("third").classList.toggle("hide");

   playerbox.innerHTML = "";
}
function setspies() {
   spyroles = [];
   spynames = "لیست جاسوس ها : &nbsp";
   while (spyroles.length < parseInt(spymany)) {
      const index = Math.floor(Math.random() * players.length);
      if (!spyroles.includes(index)) {
         spyroles.push(index);
      }
   }
   for (let y = 0; y < spyroles.length; y++) {
      spynames += `${players[spyroles[y]]}  - &nbsp`;
   }
}
let playerButtons = document.getElementsByClassName("player");
function shufflerole() {
   setplace();
   setspies();
   for (let i = 0; i < playerButtons.length; i++) {
      playerButtons[i].addEventListener("click", function () {
         if (
            spyroles.some((index) =>
               playerButtons[i].classList.contains("R" + (index + 1))
            )
         ) {
            if (advancemode) {
               Swal.fire(
                  `تو یه جاسوسی 👺 <p class="small">سعی کن بفهمی مکان بازی چیه و در عین حال کسی نفهمه تو جاسوس هستی    
               ${spynames}</p>`
               );
            } else {
               Swal.fire(
                  `تو یه جاسوسی 👺 <p class="small">سعی کن بفهمی مکان بازی چیه و در عین حال کسی نفهمه تو جاسوس هستی</p>`
               );
            }

            playerButtons[i].classList.add("hide");
         } else {
            Swal.fire(`تو یه شهروند هستی 🤴🏻<br>مکان بازی : ${place}`);
            playerButtons[i].classList.add("hide");
         }
      });
   }
}

function startgame() {
   stoptimer()
   if (!document.getElementById("prestart").classList.contains("hide")) {
      document.getElementById("prestart").classList.toggle("hide");
   }
   if ((document.getElementById("timer").classList.contains("hide"))) {
      document.getElementById("timer").classList.toggle("hide");
   }
   if ((document.getElementById("restart").classList.contains("hide"))) {
      document.getElementById("restart").classList.toggle("hide");
   }
   playerbox.innerHTML = "";
   for (let i = 0; i < players.length; i++) {
      playerbox.innerHTML += `<div class="${"R" + (i + 1)} player">${
         players[i]
      }</div>`;
   }
   shufflerole();
}
let secondelement = document.getElementById("sanie");
let seconds = 10 * parseInt(playermany);
secondelement.innerHTML = seconds;
let myTimeout;
function starttimer() {
   myTimeout = setTimeout(onesecond, 1000);
   function onesecond() {
      seconds = seconds - 1;
      secondelement.innerHTML = seconds;
      if (seconds <= 0) {
         playaudio();
         stoptimer();
      } else {
         myTimeout = setTimeout(onesecond, 1000);
      }
   }
}
function stoptimer() {
   clearTimeout(myTimeout);
   seconds = 10 * parseInt(playermany);
   secondelement.innerHTML = seconds;
}
function playaudio() {
   document.getElementById("myAudio").play();
}
