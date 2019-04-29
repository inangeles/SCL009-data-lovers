/* Manejo de data */
// puedes ver como agregamos la función a nuestro objeto global window
//DECLARAMOS NUESTROS ARRAY DEL JSON
let arrayPokemon = POKEMON.pokemon;
//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const mostrarTodos = document.getElementById("root");
const crearPlantilla = (data) => {
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
crearPlantilla(arrayPokemon)


const pokemonTypeMenu = document.querySelector(".pokemonTypes");

pokemonTypeMenu.addEventListener("change", (event) => {
    // const result = document.querySelector(".root");
    // result.filterPokeType = $`{event.target.value}`;
    const type = pokemonTypeMenu.value;
    const mostrarTodos = filterPokeType(arrayPokemon, type);
 
    showData(mostrarTodos);
});

