//Conectamos con el json
// let nombre ="";
// let link = location.href;
// let tipoComida = link.split("=");

// document.getElementById('search').addEventListener('keyup', function() {

let separar = location.search;
let v = separar.split("=");
let name_resto = v[1];


// });
   
    function mostrar(v){
        v[v.length] = "all"
        for (let x = 0; x < v.length; x++) {
            document.querySelector('.types').innerHTML += `
<a class="btn_type" href="?type=${v[x]}">${v[x]}</a>
`
    }
            
        }
        

function listadoTypeResto(){

    fetch("json/restaurantes.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let v=[]
            for (let i = 0; i < data.length; i++) {
          
                 v[i] = data[i].type
                
            }
            let listadoTypes = [...new Set(v)];
            mostrar(listadoTypes)
        })
}
listadoTypeResto()


console.log("https://images.unsplash.com/photo-1577800822292-ec4e905d03ff");



    function filtrarByTypeMenu(comida) {
      
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.restaurantes').innerHTML = ``
            if(comida == "all"){
                for (let i = 0; i < data.length; i++) {
                    let nombre = data[i].name;
                document.querySelector('.restaurantes').innerHTML += `
                <a class="resto" href="restaurant.html?/${nombre.replace(/ /g, "")}">
                <div class="tarjeta">
                <div class="title">${data[i].name}</div>
                    <div class="imagen_resto" ><img src="${data[i].image_url}" alt=""></div>
                    <div class="desc_resto">
                        <h5 class="gris_txt"><p>${data[i].location.country}, ${data[i].location.city}</p>
                        </div>
                        </a> 
                `
                }
            }else{
            for (let i = 0; i < data.length; i++) {
       
                if (data[i].type == comida) {
                    let nombre = data[i].name;
                    console.log(nombre);
                   
                    document.querySelector('.restaurantes').innerHTML += `
        <a class="resto" href="restaurant.html?/${nombre.replace(/ /g, "")}">
        <div class="tarjeta">
        <div class="title">${data[i].name}</div>
            <div class="imagen_resto" ><img src="${data[i].image_url}" alt=""></div>
            <div class="desc_resto">
                <h5 class="gris_txt"><p>${data[i].location.country}, ${data[i].location.city}</p>
                </div>
                </a> 
        `
                }
  
                
            }
        }
        })
}
document.querySelector('.restaurantes').innerHTML = ``
document.querySelector('#porPais').innerHTML += `
<select id="resto">
<option value="#">Elegir opcion por Pais</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
                <option value="Brazil">Brazil</option>
                <option value="USA">USA</option>
                <option value="Argentina">Argentina</option>
                <option value="France">France</option>
              
            </select>
            `
            function botonSelectt(){
                let botoness = document.querySelectorAll("#porPais");
                botoness.forEach(function(botonn) {
                    botonn.addEventListener("click", function(events) {
                        let valorBotonn = events.target.value;
                        console.log(valorBotonn)
                        filtrarByCountry(valorBotonn);
                    });
                });
                }

function filtrarByCountry(pais){
    fetch("json/restaurantes.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.restaurantes').innerHTML = ``
            for (let i = 0; i < data.length; i++) {
          
                if (data[i].location.country == pais) {
                    let nombre = data[i].name;
                    console.log(nombre);
                   
                    document.querySelector('.restaurantes').innerHTML += `
        <a class="resto" href="restaurant.html?resto=${nombre.replace(/ /g, "")}">
        <div class="tarjeta">
        <div class="title">${data[i].name}</div>
        <div class="imagen_resto" ><img src="${data[i].image_url}" alt=""></div>
            <div class="desc_resto">
                <h5 class="gris_txt"><p>${data[i].location.country}, ${data[i].location.city}</p>
                </div>
                </a> 
        `
                }
                
            }
        })
}

filtrarByTypeMenu(v[1]);