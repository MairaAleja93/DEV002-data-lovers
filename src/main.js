//Archivo para interactuar con el DOM
import { filtrarGeneracion } from './data.js';
import { sort } from './data.js';
import { computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const crearTarjeta = (pokemon) => {
    console.log("funcion crear tarjetas", pokemon)
    let contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML = " ";
    pokemon.forEach(pokemon => {
      contenedor.innerHTML += `
        <div class="tarjeta">
            <div class="imagen"><img src="${pokemon.img}"></div>
            <div class="cuerpo">
              <div class="titulo"><h4>${pokemon.name}</h4></div>
              <p class="num"><strong>${pokemon.num}</strong></p>
              <p class="nombre">Tipo: ${pokemon.type}</p>
              <p>Generación: ${pokemon.generation.name}</p>
              <p>Evolución: ${pokemon.evolution}</p>  
            </div>
        </div>  
      `
    })
    
    return 'crearTarjeta';
}
crearTarjeta(data.pokemon);

let btnFiltroKanto = document.getElementById("kanto");
let btnFiltroJohto = document.getElementById("johto");

btnFiltroKanto.addEventListener("click", (e) =>{
  const target = e.target;
  console.log(target);
  let fKanto = filtrarGeneracion(data.pokemon, 'kanto')
  crearTarjeta(fKanto);
  console.log("filtro generación johto")
})

btnFiltroJohto.addEventListener("click", (e) =>{
    const target = e.target;
    console.log(target);
    let fJohto = filtrarGeneracion(data.pokemon, 'johto')
    crearTarjeta(fJohto);
    console.log("filtro generación johto")
})

const ordenar = document.getElementById('select-sort')
ordenar.addEventListener('change', (event) => {
  let sortSelected = event.target.value;
  let sortPokemon = sort(data.pokemon, "name", sortSelected)

  crearTarjeta(sortPokemon)

})
const calTexto = document.getElementById('calculo')
const calculo = document.getElementById('estadistica')
calculo.addEventListener('click', () => {
  let nuevaData = computeStats("kanto", data.pokemon)
  let nuevo = computeStats("johto", data.pokemon)

  calTexto.innerHTML=`<p>El porcentaje de Pokemones que aparecieron en Generación i es ${nuevaData}% y pokemones que aparecieron en la Generación ii ${nuevo}%</p>`
})

/**const calcular = document.getElementById('estadistica')
calcular.addEventListener('click', (e)=>{
  const porcent = computeStats()
  crearTarjeta()
})

/**let btnOrdenarA = document.getElementById("A-Z");
let btnOrdenarZA = document.getElementById("Z-A");

btnOrdenarA.addEventListener("click", (e) =>{
  //const target = e.target;
  let ordenn = sort(data.pokemon, data.pokemon.name, 'A-Z')
  crearTarjeta(ordenn);
})
btnOrdenarZA.addEventListener("click", (e) =>{
  let ordenZA = sort(data.pokemon, data.pokemon.name, 'Z-A')
  crearTarjeta(ordenZA);
})**/
