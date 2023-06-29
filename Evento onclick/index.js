function logout(element) {

  let login = document.querySelector(`#login-btn`)

  if (login.classList.contains(`login`)){
    login.textContent = "Logout"
    login.classList.remove(`login`)
    login.classList.add(`logout`)
  }
  else {
    login.textContent = "Login"
    login.classList.remove(`logout`)
    login.classList.add(`login`)

  }
}

function remove(element){
  element.remove()
}

function liked(element) {
  alert("Ninja was liked")
}
