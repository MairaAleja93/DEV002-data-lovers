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
}
/*** 
export const sortData = (pokemon, sortBy, sortOrder) =>{

}
*/