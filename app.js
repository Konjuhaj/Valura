if (sessionStorage.getItem("state") === null) {
  sessionStorage.setItem("state", "finnish");
}

const toggle = document.querySelector(".check-toggle");
const english = document.querySelectorAll(".en");
const finnish = document.querySelectorAll(".fin");

toggle.addEventListener("click", (e) => {
  console.log("clicked");
  if (e.target.checked) {
    toggleLangguage(english, finnish);
    sessionStorage.setItem("state", "english");
  } else {
    toggleLangguage(finnish, english);
    sessionStorage.setItem("state", "finnish");
  }
});

function toggleLangguage(newLan, oldLan) {
  newLan.forEach((lan) => {
    lan.classList.remove("hidden");
  });
  oldLan.forEach((lan) => {
    lan.classList.add("hidden");
  });
}

console.log("loaded");
console.log(sessionStorage.getItem("state"));
if (sessionStorage.getItem("state") === "english") {
  console.log("current state is english");
  toggleLangguage(english, finnish);
  toggle.checked = true;
}

const availableCert = document.querySelector("#available");
availableCert.addEventListener("click", (e) => {
  availableCert.innerHTML = "Certificate available upon order request";
});

const availableCert2 = document.querySelector("#saatavilla");
availableCert2.addEventListener("click", (e) => {
  availableCert2.innerHTML = "Sertifikaatti saatavilla tilauksesta";
});
