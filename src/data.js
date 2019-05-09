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


//ORDENANDO ALFABETICAMENTE
const sorting = (data, sortBy, sortOrder) => {
  let sortedPokemons = [];
    if(sortOrder == "asc"){
      sortedPokemons=data.sort((a,b)=> a[sortBy].localeCompare(b[sortBy]));
    }
    else {
      sortedPokemons=data.sort((a,b)=> a[sortBy].localeCompare(b[sortBy])).reverse();
    }
  return sortedPokemons;
  }
window.sorting=sorting

//CALCULO PORCENTAJE POR TIPO
const computeStats = (arr, data) => {
  let result = Math.round((arr.length * 100) / data.length);
    return result;
}
window.computeStats=computeStats