//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.punkapi.com/v2/beers', true)

request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
        data.forEach(beers => {
            // Log each movie's title
            // console.log(beers.name);
            //  console.log(beers.description);
    const row1 = document.getElementById("row-1");
    const card = document.createElement("div");
    card.setAttribute("class","card shadow d-flex align-items-center mt-5");

    const image = document.createElement("img");
    image.setAttribute("class","card-img-top card-title pt-3 pb-3 rounded");
    image.src = beers.image_url;
    
    const cbody = document.createElement("div");
    cbody.setAttribute("class", "card-body d-flex justify-content-center flex-column text-center");

    const h3 = document.createElement("h3");
    h3.textContent=beers.name;

    const h4 = document.createElement("h4");
    h4.textContent=beers.tagline;

    const p = document.createElement("p");
    p.textContent=beers.first_brewed;



    row1.appendChild(card);
    card.appendChild(image);
    card.appendChild(cbody);
    cbody.appendChild(h3);
    cbody.appendChild(h4);
    cbody.appendChild(p); 
})

} else {
            console.log('error');
  }

   
  
}


// Send request
request.send()