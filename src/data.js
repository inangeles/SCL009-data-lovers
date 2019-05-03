/* Manejo de data */
//filtrar, ordenar y calculo



const filterPokeType = (data, condition)=>{
  const resultFilter = data.filter(element =>{
    return element.type.includes(condition);
  }) 
  return resultFilter;
}

window.filterPokeType=filterPokeType;

const filterPokeEggs = (data, condition2)=>{
  const resultFilterEgg = data.filter(element2 =>{
    return element2.egg.includes(condition2);
  }) 
  return resultFilterEgg;
}
window.filterPokeEggs=filterPokeEggs;




const OrderByPokeName = (data, index)=>{
const pokemonOrder = data.filter(element3 =>{
return element3.name.includes(index);

 /* if(index == 1){
  functionOrderAZ();
  }

  if(index == 2){
  functionOrderZA();
  }*/
   return pokemonOrder; 
})

window.OrderByPokeName=OrderByPokeName;
}




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