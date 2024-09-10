function misVisitas() {
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.favs').innerHTML = ``
            for (let index = 11; index < 21; index++) {
                document.querySelector('.favs').innerHTML += `
                  
                            <div class="tarjeta">
                  <div class="datos">
                      <img class="fto" src="https://media.admagazine.com/photos/6195f04bd48ac89b913b539f/master/w_1600%2Cc_limit/63892.jpg" alt="">
                      <div class="dato">
                          <div class="msj">${data[index].description}</div>
                          <div class="fecha">${data[index].type}</div>
                      </div>
                  </div>
              </div>
                  `


            }




        })
}
misVisitas()