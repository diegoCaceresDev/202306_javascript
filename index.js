let name = `Diego`

console.log("Hola " + name)

let hola = document.querySelector("h1").textContent += "Chau"

for (const parrafo of document.querySelectorAll("p:not(.no-tomar)")) {
  parrafo.textContent += `Hola for`
}

function setActive(element) {
  let clicks = document.querySelector("#clicks")
  parseInt(clicks)
  clicks.textContent ++
  if(element.classList.contains("dark-mode")) {
      element.innerText = "Cambiar al modo claro";
      element.classList.remove("dark-mode");
  } else {
      element.innerText = "Cambiar al modo oscuro";
      element.classList.add("dark-mode");
  }
}


