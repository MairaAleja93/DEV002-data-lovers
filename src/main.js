//Archivo para interactuar con el DOM
import { filtrarGeneracion } from './data.js';
import data from './data/pokemon/pokemon.js';

const crearTarjeta = (pokemon) => {
    console.log("funcion crear tarjetas", pokemon)
    let contenedor = document.querySelector('.contenedor')
    let tarjeta = document.querySelector('.tarjetas')
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
    let filtroKanto = filtrarGeneracion(data.pokemon, 'kanto')
    crearTarjeta(filtroKanto);
    console.log("filtro generación kanto")
})

btnFiltroJohto.addEventListener("click", (e) =>{
    const target = e.target;
    console.log(target);
    let fJohto = filtrarGeneracion(data.pokemon, 'johto')
    crearTarjeta(fJohto);
    console.log("filtro generación johto")
})

let btnOrdenarA = document.getElementById("liOrdenar");

btnOrdenarA.addEventListener("click", (e) =>{
    let s = e.target.value;
    let o = sort(data.pokemon, data.pokemon.name, s)
    crearTarjeta(o);
    console.log("ordenar?", o)
})
