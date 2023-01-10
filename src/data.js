// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
export const filtrarGeneracion = (pokemon, condicion) =>{
  let pokemones = pokemon.filter(elemento => elemento.generation.name === condicion)
  return pokemones;
};

export const sort = (data, sortBy, sortOrder) => {
  let sortData
  if (sortOrder === 'A-Z') {
    sortData = data.sort((pokemonA, pokemonB) => {
      if (pokemonA[sortBy] < pokemonB[sortBy]) {
        return -1;
      }
      else if (pokemonA[sortBy] > pokemonB[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    })
    return sortData
  } else if (sortOrder === 'Z-A') {
    sortData = data.sort((pokemonA, pokemonB) => {
      if (pokemonA[sortBy] < pokemonB[sortBy]) {
        return 1;
      }
      else if (pokemonA[sortBy] > pokemonB[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    })
    return sortData
  } else {
    return data
  }
};

export const computeStats = (tipo, data) => {
  const total = data.length;
  const pokemon = data.filter(pokemon => pokemon.generation.name.includes(tipo));
  const conteoRol = pokemon.length;
  const porcentaje = (conteoRol * 100) / total;
  return porcentaje.toFixed(2);
}




