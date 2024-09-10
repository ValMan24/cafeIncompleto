let separar = location.search;
let v = separar.split("/");
let comida = v[1];



function mostrar(resto,v){
    v[v.length] = "all"
 console.log(v)
   
      
        for (let x = 0; x < v.length; x++) {
            
            document.querySelector('.types').innerHTML += `
    <a class="btn_type" href="?/${resto}/${v[x]}/si">${v[x]}</a>
    `
    }
    
        
    }
    

function listadoTypeResto(resto){

fetch("json/menu.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        let v=[]
       
        for (let i = 0; i < data.length; i++) {
            v[i] = data[i].type
            
        }
        let listadoTypes = [...new Set(v)];
        mostrar(resto,listadoTypes)
    })
}
listadoTypeResto(v[1])









/*funcion que realiza un listado del menu, recibiendo por parametro un vector con los id de las comidas del restaurante*/ 

function menuListado(v,name_resto,decision) {

    fetch("json/menu.json")

        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.menu').innerHTML = ``

            if(decision == "si"){


                for (let x = 0; x < v.length; x++) {
                    for (let i = 0; i < data.length; i++) {
        
                        if (data[i].id == v[x]) {
                            let nombre = data[i].name;
                           
                            document.querySelector('.menu').innerHTML += `
            <a href="compra.html?c=si/${data[i].name}/${data[i].price}/${name_resto}"><div class="tag">
            <div class="name_menu" >${data[i].name}</div><div class="price_btn"><div class="price">$${data[i].price}</div><div class="btn"><span class="material-symbols-outlined">
        arrow_right_alt
        </span></div></div>
            </div></a>
        
                `
                        }
        
                    }}




            } 
else{

            for (let x = 0; x < v.length; x++) {
            for (let i = 0; i < data.length; i++) {

                if (data[i].id == v[x]) {
                    let nombre = data[i].name;
                   
                    document.querySelector('.menu').innerHTML += `
    <a href="compra.html?c=si/${data[i].name}/${data[i].price}/${name_resto}"><div class="tag">
    <div class="name_menu" >${data[i].name}</div><div class="price_btn"><div class="price">$${data[i].price}</div><div class="btn"><span class="material-symbols-outlined">
arrow_right_alt
</span></div></div>
    </div></a>

        `
                }

            }}}
        })
}



/*segun el tipo de comida que se selecciono, se arma una tarjeta con la descripcion del restaurante*/ 

function filtrar(comida,decision) {
 
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })

        .then(data => {


          
         
       
            for (let index = 0; index < data.length; index++) {
                let nombre = data[index].name;
                let menu = nombre.replace(/ /g, "");

                if (menu == comida) {
 
                    document.querySelector('.restaurant').innerHTML = ` 
                    <div class="tarjeta">
            <div class="imagen_resto" ><img src="${data[index].image_url}" alt=""></div>
            <div class="desc_resto">
            <h3><div class="title">${data[index].name}</div></h3>
            <div class="map"><h4><a class="mapa" href="#">see on a map</a></h4></div>
                <p>${data[index].description}</p>
                <h6 class="gris_txt">${data[index].location.country}, ${data[index].location.city}</h6>
             <div class="calificacion"><img class="star" src="./img/star_24dp_5F6368.svg" alt=""> ${data[index].rating} (${data[index].votes})</div>
             <div class="comentarios"><a class="coment" href="comentario.html?name=${menu}">Comentarios</a></div>
             <div class="vistas"> <div></div><img class="foto_resto" src="${data[index].images[0]}" alt=""> <div><img class="foto_resto" src="${data[index].images[1]}" alt=""></div> <div><img class="foto_resto" src="${data[index].images[2]}" alt=""></div> <div><img class="foto_resto" src="${data[index].images[3]}" alt=""></div> <div><img class="foto_resto" src="${data[index].images[4]}" alt=""></div> </div>
        
             <h3><div class="title">Our Menu</div></h3>
            
    </div>
    
    `
   
    menuListado(data[index].menu,comida,decision)


                }
            }
        })


}















filtrar(comida,v[3])
