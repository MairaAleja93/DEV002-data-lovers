//Archivo para interactuar con el DOM
import { filtrarGeneracion, sort, computeStats } from './data.js';
import data from './data/pokemon/pokemon.js';

const crearTarjeta = (pokemon) => {
    let contenedor = document.querySelector('.contenedor')
    contenedor.innerHTML = " ";
    pokemon.forEach(pokemon => {
      contenedor.innerHTML += `
        <div class="tarjeta">
            <p class="num"><strong>${pokemon.num}</strong></p>
            <div class="imagen"><img src="${pokemon.img}"></div>
            <div class="cuerpo">
              <div class="titulo"><h4>${pokemon.name}</h4></div>
              <p>Generación: ${pokemon.generation.name}</p>
              <p class="nombre">Tipo: ${pokemon.type}</p>
            </div>
        </div>  
      `
    })
    
    return crearTarjeta;
}
crearTarjeta(data.pokemon);

const btnFiltro = document.getElementById("liFiltro");
const calTexto = document.getElementById('calculo')
const textoOrden = document.getElementById('texto-orden');
const ordenar = document.getElementById('selectOrden')
const calculo = document.getElementById('estadistica')

btnFiltro.addEventListener('change', (e) =>{
  
  const target = e.target.value;
  console.log(target);
  let filtrar = filtrarGeneracion(data.pokemon, target)
  if(target == 'kanto'){
    textoOrden.innerHTML=' ';
    let nuevaData = computeStats("kanto", data.pokemon)
    calTexto.innerHTML=`<p class="kanto">Estadística:<br>
    El porcentaje de Pokémon que aparecieron por primera vez en la Generación i es: <strong>${nuevaData}%</strong></p>`
  }
  if(target == 'johto'){
    textoOrden.innerHTML=' ';
    let nuevaData = computeStats("johto", data.pokemon)
    calTexto.innerHTML=`<p class="kanto">Estadística:<br>
    El porcentaje de Pokémon que aparecieron por primera vez en la Generación ii es: <strong>${nuevaData}%</strong></p>`
  }
  crearTarjeta(filtrar);
})

ordenar.addEventListener('change', (event) => {
  
  let ordSeleccionado = event.target.value;
  let ordPokemon = sort(data.pokemon, "name", ordSeleccionado)
  if(ordSeleccionado == 'A-Z'){
    calTexto.innerHTML=' ';
    textoOrden.innerHTML=`<p class="txtOrd">Orden ascendente A-Z</p>`
  }else{
    calTexto.innerHTML=' ';
    textoOrden.innerHTML=`<p class="txtOrd">Orden descendente Z-A</p>`
  }
  crearTarjeta(ordPokemon)
})

calculo.addEventListener('click', () => {
  let nuevaData = computeStats("kanto", data.pokemon)
  let nuevo = computeStats("johto", data.pokemon)
  calTexto.innerHTML=`<p>El porcentaje de Pokemones que aparecieron en Generación i es ${nuevaData}% y pokemones que aparecieron en la Generación ii ${nuevo}%</p>`
})


