/* Manejo de data */
//filtrar, ordenar y calculo



const filterPokeType = (data, condition)=>{
  const resultFilter = data.filter(element =>{
    return element.type.includes(condition);
  }) 
  return resultFilter;
}

window.filterPokeType=filterPokeType;


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