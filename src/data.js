/* Manejo de data */
//filtrar, ordenar y calculo
window.data = {
  filterPokeType: (arr,type) => {
    const pokeType = arr.filter(element=>{
      return element.type.includes(type);
    })
    return pokeType;
  }


}
