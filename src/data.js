/* Manejo de data */

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