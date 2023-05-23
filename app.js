const toggle = document.querySelector(".check-toggle");
const english = document.querySelectorAll(".en");
const finnish = document.querySelectorAll(".fin");

console.log(toggle);
toggle.addEventListener("click", (e) => {
  console.log("clicked");
  if (e.target.checked) {
    finnish.forEach((finn) => {
      finn.classList.add("hidden");
    });
    english.forEach((eng) => {
      eng.classList.remove("hidden");
    });
  } else {
    finnish.forEach((finn) => {
      finn.classList.remove("hidden");
    });
    english.forEach((eng) => {
      eng.classList.add("hidden");
    });
  }
});

const availableCert = document.querySelector("#available");
availableCert.addEventListener("click", (e) => {
  availableCert.innerHTML = "Sertificate available upon order request";
});

const availableCert2 = document.querySelector("#saatavilla");
availableCert2.addEventListener("click", (e) => {
  availableCert2.innerHTML = "Sertifikaatti saatavilla tilauksesta";
});
