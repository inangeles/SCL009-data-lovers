  /* Manejo de DOM */
  
  //DECLARAMOS NUESTROS ARRAY DEL JSON
  let dataPokemon = window.POKEMON.pokemon;
  let container = document.getElementById("container-result");
  const showAll = document.getElementById("root");
   //CONTENEDOR DONDE MOSTRAREMOS LA INFO
  const createCards = (data) => {
    let pokemonCard ='';
  //RECORREMOS EL ARRAY 
  data.forEach(pokemon => {
  //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
  let card = `
  <div class="col-md-4 my-3">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <img src="${ pokemon.img }" /><br>
  <b>Nº </b>${ pokemon.num }</b><br>
  <b>${ pokemon.name }</b><br>
  <b>Tipo </b><br> ${ pokemon.type }</b><br>
  <b>Debilidades </b><br> ${ pokemon.weaknesses }<br>
  <b>Huevos </b><br> ${pokemon.egg }</b><br><br>
  </div>
  </div>
  </div>
  `;
  pokemonCard += card;
  })
  showAll.innerHTML=pokemonCard;
  }
  //MOSTRAMOS LA DATA DESDE EL JSON
  createCards(dataPokemon)
  

  //SELECT TIPO POKEMON
  const selectType = document.getElementById("filterType");
  selectType.addEventListener("change", () =>{
    let condition= selectType.options[selectType.selectedIndex].text; //OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO EN DROPDOWN
    let pokemonType=window.filterPokeType(dataPokemon,condition);
    container.innerHTML="El " + window.computeStats(pokemonType,dataPokemon) + "% del total de Pokemones corresponde al tipo " + condition;
    pokemonType.forEach(()=>{
      return createCards(pokemonType);
    })
  })
  
  //SELECT TIPO HUEVO
  const selectEgg = document.getElementById("filterEgg");
  selectEgg.addEventListener("change", () =>{
    let condition2= selectEgg.options[selectEgg.selectedIndex].text;
    let pokemonEgg=window.filterPokeEggs(dataPokemon,condition2);
    pokemonEgg.forEach (() =>{
      return createCards(pokemonEgg)
    })

  })

  //SELECT ORDENAR A-Z Y Z-A
  const selectSort = document.getElementById("orderPokemon")
  selectSort.addEventListener("change", () =>{
    let conditionSortBy= selectSort.options[selectSort.selectedIndex].getAttribute("sortby");
    let conditionOrderBy= selectSort.options[selectSort.selectedIndex].getAttribute("orderby");
    let sortedAlph=window.sorting(dataPokemon,conditionSortBy,conditionOrderBy);
    sortedAlph.forEach(()=>{
      return createCards(sortedAlph);
    })
})

  //BOTON VOLVER A INICIO
  document.getElementById("reset").addEventListener("click", () =>{
    location.reload();
  })

  
