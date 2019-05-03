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
  </div>
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
    let condition= selectType.options[selectType.selectedIndex].text;
    let pokemonType=window.filterPokeType(dataPokemon,condition);
    console.log(pokemonType);

    pokemonType.forEach (pokemon =>{
      return createCards(pokemonType);
    })

  })

  const selectEgg = document.getElementById("filterEgg");
  const containerEgg = document.getElementById("root");

  selectEgg.addEventListener("change", () =>{
    let condition2= selectEgg.options[selectEgg.selectedIndex].text;
    let pokemonEgg=window.filterPokeEggs(dataPokemon,condition2);
    pokemonEgg.forEach (pokemon =>{
      return createCards(pokemonEgg);
    })
  })

  const selectAz = document.getElementById("orderPokemon");
  const containerAz = document.getElementById("root");

  selectAz.addEventListener("change", () =>{
    let conditionAz= selectAz.options[selectEgg.selectedIndex].text;
    let sortedAz=window.sortAz(dataPokemon,conditionAz);
    sortedAz.forEach (pokemon =>{
      return createCards(sortedAz);
    })
  })
