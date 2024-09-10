let cant=0;
//Conectamos con el json
let separar = location.search;
let v = separar.split("/");
console.log(v)
let nombre_menu = v[1];
let precio_unitario = v[2];
let name_resto = v[3];
function darValor(){
    let separar = location.search;
let v = separar.split("/");
let p = v[2];
return p
}

function showAlert(d) {
   
    alert('Compra Realizada con éxito');

}





document.querySelector('.ticket_compra').innerHTML = `
<div class="encabezado_ticket">Su Pedido</div>
<div class="data_producto">
    <div class="title_compra">Producto: ${nombre_menu}</div> 
    <div class="precio_unitario">Precio Unitario: $${precio_unitario} c/u</div>
    <div class="cant_producto">Cantidad: 
        <button id="btnrestar"  onclick="restar()">-</button>
        <p class="botonCarrito" id="cantidad">0</p>
        <button id="btnsumar" onclick="sumar()">+</button>
    </div>
</div>

<div class="pie_ticket">
<div class="total">Total:  <span id="subtotal"></span></div>
<a href="restaurant.html?/${name_resto}"><button class="carrito" onclick="showAlert()"><span class="material-symbols-outlined">
shopping_cart
</span></button></a><button class="carrito"><a href="restaurant.html?/${name_resto}"><span class="material-symbols-outlined">
cancel
</span></button></a>
</div>
</div>`





function sumar(){
     let unit = darValor();
console.log(unit)
    if(cant < 15){
      btnsumar.innerText= "+"
       btnrestar.innerText= "-"
      cant = cant + 1;
      cantidad.innerText=cant;
    }
    else{
      btnsumar.innerText = "block"
      btnsumar.style.color = "gray"
      btnsumar.style.cursor = "default"
      alert("No se puede puede pedir mas de 15 platos, hace mal a la saludo <3");}
  
      cantidadPedido = cant*unit;
      subtotal.innerText = `$ ${cantidadPedido}`;
  
    }
  
  function restar(){
    let unit = darValor();
    if(cant > 0){
      btnrestar.innerText= "-"
      btnsumar.innerText= "+"
      cant = cant - 1;
      cantidad.innerText=cant;
    }
    else{
      btnrestar.innerText = "block"
      btnrestar.style.color = "gray"
      alert("No se puede puede pedir 0 platos");}
       cantidadPedido = cant*unit;
      subtotal.innerText = `$ ${cantidadPedido}`;
    }
  // prompt("Como te llamas");
  function agregarPedido(){
  cantidadPedido = cant*unit;
  console.log(cantidadPedido);
  }
  
 

  function buscarValor(){
    let id = 1; 
        fetch("json/menu.json")
    
            .then(response => {
                return response.json()
            })
            .then(data => {
            
                for (let i = 0; i < data.length; i++) {
    
                    if(data[i].id == id){
             
                      
                    }
                }
            })
    }
    

