//Check to see if script is linked properly.
console.log("This script is linked properly!")

const app = document.getElementById('root')

//const logo = document.createElement('img')
//logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

//app.appendChild(logo)
app.appendChild(container)

let request = new XMLHttpRequest()
request.open('GET', 'https://api.punkapi.com/v2/beers', true)
request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beers => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = beers.name

      const p = document.createElement('p')
      beers.tagline = beers.tagline.substring(0, 300)
      p.textContent = `${beers.first_brewed}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()