const input = document.querySelector("input")
const button = document.querySelector("button")
const linkDisplay = document.querySelector("#shortened-link")
const linkList = document.querySelector("#url-list")

const baseURL = "http://shorten.surge.sh/"
const randChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let longURL = ""
let shortURL = "#"
let newURL = ""

const redirect = localStorage.getItem(location.hash)

if (redirect) {
  window.location = redirect
}

if (button) {
  button.addEventListener("click", () => {
    longURL = input.value

    for (let i = 0; i < 7; i++) {
      shortURL += randChars.charAt(Math.floor(Math.random() * randChars.length));
    }

    newURL = baseURL + shortURL
    localStorage.setItem(shortURL, longURL)
    linkDisplay.innerHTML += `<p>Your new shortened link:</p><a href="${longURL}">${newURL}</a>`
  })
}

if (linkList) {
  for (let i = 0; i < localStorage.length; i++) {
    let url = localStorage.getItem(localStorage.key(i));
    linkList.innerHTML += `<p>${baseURL}${localStorage.key(i)} — <a href="{url}">${url}</a>`
  }
}

