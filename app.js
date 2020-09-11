const deg = 6;
const hour = document.querySelector("#hr");
const minute = document.querySelector("#mn");
const seconds = document.querySelector("#sc");

function toggleClass() {
  const body = document.querySelector("body");
  body.classList.toggle("light");
}

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;

  console.log();
});
