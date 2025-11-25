// section haru
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let fight = document.querySelector("#fight");

let contact = document.querySelector("#contact");

// link haru
let homeLink = document.querySelector("#homeLink");
let aboutLink = document.querySelector("#aboutLink");
let fightLink = document.querySelector("#fightLink");

let contactLink = document.querySelector("#contactLink");

//suruma home marta dekha ko
home.style.display = "block";
homeLink.classList.add("active");
about.style.display = "none";
fight.style.display = "none";

contact.style.display = "none";

// link ma click garda section change garne
homeLink.addEventListener("click", function () {
  changeSection(home);
  homeLink.classList.toggle("active");
});
aboutLink.addEventListener("click", function () {
  changeSection(about);
  aboutLink.classList.toggle("active");
});
fightLink.addEventListener("click", function () {
  changeSection(fight);
  fightLink.classList.toggle("active");
});

// i know, this is liitle messy but it works :D (Code line short garna jhau layo)

function changeSection(section) {
  home.style.display = "none";
  homeLink.classList.remove("active");
  about.style.display = "none";
  aboutLink.classList.remove("active");
  fight.style.display = "none";
  fightLink.classList.remove("active");

  if (section) {
    section.style.display = "block";
  }
}
