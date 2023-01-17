export const filtrarGeneracion = (pokemon, condicion) =>{
  let pokemones = pokemon.filter(elemento => elemento.generation.name === condicion)
  return pokemones;
};

export const sort = (pokemon, ord, ordSeleccionado) => {
  let ordenado;
  if (ordSeleccionado === 'A-Z') {
    ordenado = pokemon.sort((pokemonA, pokemonB) => {
      if (pokemonA[ord] < pokemonB[ord]) {
        return -1;
      }
      else if (pokemonA[ord] > pokemonB[ord]) {
        return 1;
      } else {
        return 0;
      }
    })
    return ordenado
  } else if (ordSeleccionado === 'Z-A') {
    ordenado = pokemon.sort((pokemonA, pokemonB) => {
      if (pokemonA[ord] < pokemonB[ord]) {
        return 1;
      }
      else if (pokemonA[ord] > pokemonB[ord]) {
        return -1;
      } else {
        return 0;
      }
    })
    return ordenado
  } else {
    return pokemon
  }
};

export const computeStats = (tipo, data) => {
  const total = data.length;
  const pokemon = data.filter(pokemon => pokemon.generation.name.includes(tipo));
  const contarPoFiltrado = pokemon.length;
  const porcentaje = (contarPoFiltrado * 100) / total;
  return porcentaje.toFixed(2);
}




