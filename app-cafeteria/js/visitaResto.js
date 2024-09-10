
let separar = location.search;
let v = separar.split("=");
let name_resto = v[1];








function misComentarios(idUser) {
    fetch("json/usuarios.json")

        .then(response => {
            return response.json()
        })
        .then(data => {

            for (let index = 0; index < data.length; index++) {
                if (data[index].id_usuario  == idUser) {
                    let v = data[index].visitas
                    escribirComentarios(v, v.length);
                }

            }




        })
}

function escribirComentarios(v, size) {
console.log(v)
console.log(size)
    fetch("json/restaurantes.json")

        .then(response => {
            return response.json()
        })
        .then(data => {

            document.querySelector('.visitas').innerHTML = ``
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < data.length; y++) {
                    if (data[y].id_usuario == v[x]) {
                        document.querySelector('.visitas').innerHTML += `

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
