
let  separar = location.search;
let v = separar.split("=");
let id = v[1];

createUser(id);
function createUser(id){
    console.log(id);
    let foto_perfil = "";
    fetch("json/usuarios.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        //  document.querySelector('.perfil').innerHTML = ``
        for (let i = 0; i < data.length; i++) {
            if (data[i].id_usuario == id) {

               if(data[i].imagen_usuario == undefined ||  data[i].imagen_usuario == null){
                 foto_perfil = "https://thumbs.dreamstime.com/b/anonymous-male-profile-sign-circle-man-avatar-graphic-sign-anonymous-male-profile-sign-circle-isolated-white-215427929.jpg";
               }else{ foto_perfil =data[i].imagen_usuario;}

                document.querySelector('.perfil').innerHTML += `
                <h3>¡Bienvenido "${data[i].nombre_completo}"!</h3>
                <img src=${foto_perfil} alt="">
                <div class="description">
                    <p>Correo Electrónico:${data[i].correo_electronico}</p>
                    <p>Descripción Personal:${data[i].descripcion_personal}</p>
                    <p>Teléfono:${data[i].telefono}</p>
                    <p>Fecha de Nacimiento:${data[i].fecha_de_nacimiento}</p>
                </div>
    `
            }
            
        }
    })
}






