/* Manejo del DOM */
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
            <p class="number"><b>Nº</b> ${ personaje.num }</p>
            <p class="character"><p><b> ${ personaje.name } </b></p>
            <p class="image"><img src="${ personaje.img }"/></p>
            <p class="type"><b>Tipo: </b> ${ personaje.weaknesses }</p>
            <p class="weakness"><b>Debilidades: </b>${ personaje.weaknesses }</p>
            <p class="egg"><b>Huevos: </b> ${personaje.egg }</p><br><br>
    `;
  })

}
//MOSTRAMOS LA DATA DESDE EL JSON
crearPlantilla(POKEMON.pokemon)