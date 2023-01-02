// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/



export const crearTarjeta = (pokemon) => {
  console.log("aqui", pokemon)
  let contenedor = document.querySelector('.contenedor')
  pokemon.forEach(pokemon => {
    contenedor.innerHTML += `
      <div class="tarjeta">
          <div class="imagen"><img src="${pokemon.img}"></div>
          <div class="cuerpo">
            <div class="titulo"><h4>${pokemon.name}</h4></div>
            <p class="nombre">Tipo: ${pokemon.type}</p>
            <p>Tamaño: ${pokemon.size}</p>
            <p>Evolución: ${pokemon.evolution}</p>  
          </div>
      </div>  
    `
  })
  
  return 'crearTarjeta';
}
