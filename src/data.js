/* Manejo de data */
//filtrar, ordenar y calculo

// FILTRANDO POR TIPO
const filterPokeType = (data, condition)=>{
  const resultFilter = data.filter(element =>{
    return element.type.includes(condition);
  }) 
  return resultFilter;
}
window.filterPokeType=filterPokeType;

// FILTRANDO HUEVOS
const filterPokeEggs = (data, condition2)=>{
  const resultFilterEgg = data.filter(element2 =>{
    return element2.egg.includes(condition2);
  }) 
  return resultFilterEgg;
}
window.filterPokeEggs=filterPokeEggs;


// ORDENANDO ALFABETICAMENTE
const sorting = (data, sortBy, sortOrder) => {
  let sortedPokemons = [];
  if(sortBy == "name"){
    if(sortOrder == "asc"){
      sortedPokemons=data.sort((a,b)=> a.name.localeCompare(b.name));
    }
    else if (sortOrder == "des"){
      sortedPokemons=data.sort((a,b)=> a.name.localeCompare(b.name)).reverse();
    }
    return sortedPokemons;
  }
}
window.sorting=sorting

const computeStats = (arr) => {
  let result = Math.round((arr.length*100) / 151);
    return result;
}
window.computeStats=computeStats


// const filterPokeOrder = (data, index)=>{
// const resultFilterOrder = data.filter(element3 =>{
// return element3.name.includes(name);
// })
// return resultFilterOrder;
// }
// window.filterPokeOrder=filterPokeOrder;


// ORDENANDO DE LA A-Z
// const order = ((data, sortBy, sortOrder ) => {

// const sortedPokemon = data.sort((a, b) => {
//     if (a.name < b.name)
//       return 1;
//     if (a.name > b.name)
//       return -1;
//     return 0;
//   });
//   return sortedPokemon;
// }

// const sortZA = (data) => {
// const sortedPokemon2 = data.sort((a, b) => {
//     if (b.name < a.name)
//       return 1;
//     if (b.name > a.name)
//       return -1;
//     return 0;
//   });
//   return sortedPokemon2;
// };
// window.sortZA=sortZA;


// window.data = {
//   filterPokeType: (data,condition) => {
//     const pokemonByType = arr.filter(element=>{
//       return element.type.includes("condition");
//     })
//     return pokemonByType;
//   }

/*filterPokeType(arrayPokemon, chosenType);


// window.data = {
//   filterPokeType: (arr,condition) => {
//     const pokemonByType = arr.filter(element=>{
//       return element.type.includes(condition);
//     })
//     return pokemonByType;
//   }

// filterPokeType(arrayPokemon, chosenType);
//}

//  const filterPokeType = (arr, condition) => {
//     const pokemonByType = arr.filter(element=>{
//       return element.type.includes(condition);
//     });
//     return pokemonByType;
//   }

//   window.filterPokeType = filterPokeType */