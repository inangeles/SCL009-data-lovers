/* Manejo de data */
// puedes ver como agregamos la función a nuestro objeto global window
//DECLARAMOS NUESTROS ARRAY DEL JSON
let arrayPokemon = POKEMON.pokemon;
//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const mostrarTodos = document.getElementById('root');
const crearPlantilla = (data) => {
  let plantillaTarjeta = '';
  //RECORREMOS EL ARRAY 
  data.forEach((personaje) => {
    //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
    mostrarTodos.innerHTML += `
            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <img src="${ personaje.img }" /><br>
            <b>Nº</b>${ personaje.num }</b><br>
            <b>${ personaje.name }</b><br>
            <b>Tipo </b><br> ${ personaje.weaknesses }</b><br>
            <b>Debilidades </b><br> ${ personaje.weaknesses }<br>
            <b>Huevos </b><br> ${personaje.egg }</b><br><br>
            </div>
            </div>
            </div>
            
    `;
  })
}
//MOSTRAMOS LA DATA DESDE EL JSON
crearPlantilla(POKEMON.pokemon)