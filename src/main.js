/* Manejo del DOM */
//DECLARAMOS NUESTROS ARRAY DEL JSON
let arrayPokemon = POKEMON.pokemon;
//CONTENEDOR DONDE MOSTRAREMOS LA INFO
const mostrarTodos = document.getElementById('root');
const crearPlantilla = (data) => {
//RECORREMOS EL ARRAY 
data.forEach((personaje) => {
//CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
    mostrarTodos.innerHTML += `
            <p class="number"><b>Nº</b> ${ personaje.num }</p>
            <p class="character"><b> ${ personaje.name } </b></p>
            <p class="image"><img src="${ personaje.img }"/></p>
            <p class="type"><b>Tipo:</b> ${ personaje.type }</p>
            <p class="weakness"><b>Debilidades:</b> ${ personaje.weaknesses }</b></p>
            <p class="egg"><b>Huevos:</b> ${personaje.egg }</p><br><br>
    `;
  
  })
  
}
crearPlantilla(POKEMON.pokemon)



// let arrayTipo= (tipo) => {
//     return  POKEMON.pokemon.type === "Grass"

// }

// let pokemonFilter = arrayPokemon.filter(arrayTipo)

// console.log(pokemonFilter)



function tipos (personaje){
    return{
        ...personaje, 
        type: personaje.type
    }
}



const filtroUno = POKEMON.pokemon.filter(personaje => personaje.num === '001');
console.log('filtroUno', filtroUno);


// const  fuego =(tipo) =>{
//     return tipo.type === "Fire"
// }

// var arrayType=POKEMON.pokemon

// var tipoFuego= arrayType.filter(fuego)

// console.log(tipoFuego)



// let arrayPokemonType = POKEMON.pokemon

// function tipo (tipo) {
//     var {pokemon:type}= tipo
//     console.log ( `Tipos: ${type}`)

// }

// tipo(arrayPokemonType)





// var tiposPokemon= arrayPokemon (tipo = ({type}) => type === "Grass" )


// 	let poke=["fuego","agua","tierra"]

// const result = poke.filter(tipo => tipo.length === "fuego");

// console.log(result);
