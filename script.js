function tooggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      (alt =
        "Foto de Paulo Augusto, com fisionomia seria, com camisa escura , calvo e fundo amarelo.")
    )
  } else {
    img.setAttribute(
      "src",
      "./assets/avatar.png",
      (alt =
        "Foto de Paulo Augusto, com fisionomia seria, com camisa escura , calvo e fundo azul claro.")
    )
  }
}
