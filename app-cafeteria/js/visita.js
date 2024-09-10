function misVisitas() {
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.visitas').innerHTML = ``
            for (let index = 0; index < 10; index++) {
                document.querySelector('.visitas').innerHTML += `
                  
                            <div class="tarjeta">
                  <div class="datos">
                      <img class="fto" src="https://images.adsttc.com/media/images/58dc/624a/e58e/ceef/0900/025e/large_jpg/05_Press.jpg?1490838086" alt="">
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