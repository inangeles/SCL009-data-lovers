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


// ORDENANDO DE LA A-Z
const sortAz = (data) => {
  const sortedPokemon = data.sort((a, b) => {
    if (a.name > b.name)
      return 1;
    else if (a.name < b.name)
      return -1;
    return 0;
  });
  
  return sortedPokemon;
};
window.sortAz=sortAz;







