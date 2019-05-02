/* Manejo de DOM */
// puedes ver como agregamos la función a nuestro objeto global window
//DECLARAMOS NUESTROS ARRAY DEL JSON
let dataPokemon = window.POKEMON.pokemon;
//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const showAll = document.getElementById("root");
const createCards = (data) => {
let pokemonCard ='';
  //RECORREMOS EL ARRAY 
  data.forEach((pokemon) => {
    //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
    card = `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${ pokemon.img }" /><br>
    <b>Nº </b>${ pokemon.num }</b><br>
    <b>${ pokemon.name }</b><br>
    <b>Tipo </b><br> ${ pokemon.weaknesses }</b><br>
    <b>Debilidades </b><br> ${ pokemon.weaknesses }<br>
    <b>Huevos </b><br> ${pokemon.egg }</b><br><br>
    </div>
    </div>S
    </div>
    `;
    pokemonCard += card
  })
  showAll.innerHTML=pokemonCard
}
//MOSTRAMOS LA DATA DESDE EL JSON
createCards(dataPokemon)


// OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO EN DROPDOWN
const selectType = document.getElementById("filterType");
const containerType = document.getElementById("root");

selectType.addEventListener("change", () =>{

  var x = document.getElementById("filterType").selectedIndex;
  var y = document.getElementById("filterType").options;
  var condition = y[x].text;
  //let condition= selectType.options[selectType.selectIndex].text;
const pokemonType=window.filterPokeType(dataPokemon, condition)

document.getElementById('hola').innerHTML += pokemonType;

console.log(pokemonType)


let showType = document.getElementById("root");
const createCards2 = (data) => {
let pokemonCard2 ='';

  data.forEach((pokemon) => {
    //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
    card = `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${ pokemon.img }" /><br>
    <b>Nº </b>${ pokemon.num }</b><br>
    <b>${ pokemon.name }</b><br>
    <b>Tipo </b><br> ${ pokemon.weaknesses }</b><br>
    <b>Debilidades </b><br> ${ pokemon.weaknesses }<br>
    <b>Huevos </b><br> ${pokemon.egg }</b><br><br>
    </div>
    </div>S
    </div>
    `;
    pokemonCard2 += card
  })
  showType.innerHTML=pokemonCard2
}
//MOSTRAMOS LA DATA DESDE EL JSON
createCards2(pokemonType)

})






/*// // OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO en dropdown
// document.getElementById("filterType").addEventListener("change", () => {
// let pokeType= document.getElementById("filterType");
// let chosenType= pokeType.options[pokeType.selectedIndex].text;
// console.log(chosenType);
// })

// let a = document.getElementById("filterType");
//  a.addEventListener("change", () => {
//   let pokeType= a.value;
//     if (pokeType === "Fire"){
//       window.filterPokeType(arrayPokemon);
//       crearPlantilla="";
//       crearPlantilla(arrayPokemon);
//     }

//   })*/