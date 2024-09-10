
let separar = location.search;
let v = separar.split("=");
let name_resto = v[1];








function misComentarios(resto) {
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })
        .then(data => {

            for (let index = 0; index < data.length; index++) {
                let n = data[index].name
                let nombre = n.replace(/ /g, "")
                if (nombre == resto) {
                    let v = data[index].menu
                    escribirComentarios(v, v.length);
                }

            }




        })
}

function escribirComentarios(v, size) {
console.log(v)
console.log(size)
    fetch("json/usuarios.json")

        .then(response => {
            return response.json()
        })
        .then(data => {

            document.querySelector('.comentarios').innerHTML = ``
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < data.length; y++) {
                    if (data[y].id_usuario == v[x]) {
                        document.querySelector('.comentarios').innerHTML += `

<div class="tarjeta">
    <div class="datos">
        <img class="fto" src="${data[y].imagen_usuario}" alt="">
        <div class="dato">
            <div class="msj">${data[y].comentario}</div>
            <div class="fecha">${data[y].fecha_comentario}</div>
        </div>
    </div>
</div>

`}
                }
            }



        })

}



misComentarios(name_resto);



