  /* Manejo de DOM */
  // puedes ver como agregamos la función a nuestro objeto global window
  //DECLARAMOS NUESTROS ARRAY DEL JSON
  let dataPokemon = window.POKEMON.pokemon;
  let container= document.getElementById("container-result");
  //CONTENEDOR DONDE MOSTRAREMOS LA INFO
  const showAll = document.getElementById("root");
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
  

  // OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO EN DROPDOWN
  const selectType = document.getElementById("filterType"); 
  selectType.addEventListener("change", () =>{
    let condition= selectType.options[selectType.selectedIndex].text;
    let pokemonType=window.filterPokeType(dataPokemon,condition);
    container.innerHTML="El " + window.computeStats(pokemonType) +"% del Total de Pokemones corresponde al tipo " + condition;
    
    pokemonType.forEach (() =>{
      return createCards(pokemonType)

    })
    })

  const selectEgg = document.getElementById("filterEgg");  
  selectEgg.addEventListener("change", () =>{
    let condition2= selectEgg.options[selectEgg.selectedIndex].text;
    let pokemonEgg=window.filterPokeEggs(dataPokemon,condition2);
    pokemonEgg.forEach (() =>{
      return createCards(pokemonEgg)
    })

  })

  const selectSort = document.getElementById("orderPokemon")
  selectSort.addEventListener("change", () =>{
    let conditionSortBy= selectSort.options[selectSort.selectedIndex].getAttribute("sortby");
    let conditionOrderBy= selectSort.options[selectSort.selectedIndex].getAttribute("orderby");
    let sortedAlph=window.sorting(dataPokemon,conditionSortBy,conditionOrderBy);
    sortedAlph.forEach(()=>{
      return createCards(sortedAlph);
    })
})

document.getElementById("reset").addEventListener("click", () =>{
    location.reload();
})

 // const selectZA = document.getElementById("orderPokemon");
 // const containerZA = document.getElementById("root");
 //  selectZA.addEventListener("change", () =>{
 //    let conditionZA= selectZA.options[selectZA.selectedIndex].text;
 //    let sortedZA=window.sortZA(dataPokemon,conditionZA);
 //    sortedZA.forEach (pokemon =>{
 //      return createCards(sortedZA);
 //    })
 //  })



//   const selectOrder = document.getElementById("orderPokemon");
//   const containerOrder = document.getElementById("root");
//   selectOrder.addEventListener("change", () =>{
//   let index= document.getElementById("orderPokemon").selectedIndex;  
//   let pokemonOrder=window.filterPokeOrder(dataPokemon,index);
//   console.log(pokemonOrder);
// // pokemonOrder.forEach (pokemon =>{
//return createCards(pokemonOrder)
//}
//)


  // var orderPokemon = dataPokemon
  // document.getElementById("root").innerHTML = orderPokemon;

  // function myFunction() {


  //   orderPokemon.sort();  
  //   document.getElementById("root").innerHTML = orderPokemon;
  // }



  /*// // OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO en dropdown
  // document.getElementById("filterType").addEventListener("change", () => {
  // let pokeType= document.getElementById("filterType");
  // let chosenType= pokeType.options[pokeType.selectedIndex].text;
  // console.log(chosenType);
  // })

  // let a = document.getElementById("filterType");
  //  a.addEventListener("change", () => {
  //   let pokeType= a.value;
  //     if (pokeType === "Fire"){
  //       window.filterPokeType(arrayPokemon);
  //       crearPlantilla="";
  //       crearPlantilla(arrayPokemon);
  //     }

  //   })*/

