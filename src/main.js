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
      return createCards(pokemonType)
    })

  })


  const selectEgg = document.getElementById("filterEgg");
  const containerEgg = document.getElementById("root");

  selectEgg.addEventListener("change", () =>{
    let condition2= selectEgg.options[selectEgg.selectedIndex].text;
    let pokemonEgg=window.filterPokeEggs(dataPokemon,condition2);
    pokemonEgg.forEach (pokemon =>{
      return createCards(pokemonEgg)
    })

  })

  const selectOrder = document.getElementById("orderPokemon");
  const containerOrder = document.getElementById("root");

  selectOrder.addEventListener("change", () =>{
    //let index = document.getElementById("orderPokemon").selectedIndex;
   // let options = document.getElementById("orderPokemon").options;
    let index= document.getElementById("orderPokemon").selectedIndex;

    let pokemonOrder=window.OrderByPokeName(dataPokemon,index);
    console.log(pokemonOrder);

    })

   /* function functionOrderAZ() {    
      dataPokemon.sort();
      document.getElementById("root").innerHTML = dataPokemon;
    } */

  /*  function functionOrderZA() {    
      dataPokemon.sort(); 
      dataPokemon.reverse();   
      document.getElementById("root").innerHTML = dataPokemon; */

      //pokemonOrder.forEach (pokemon =>{
      // return createCards(pokemonOrder)
    // })

 /*   } */
  


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