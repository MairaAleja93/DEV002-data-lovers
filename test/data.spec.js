import { filtrarGeneracion, sort, computeStats } from '../src/data.js';
const data = [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "evolution": {
      "next_evolution": [{
        "num": "002",
        "name": "ivysaur"
      }]
    }
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    }
  },
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    }
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    }
  },
  {
    "num": "167",
    "name": "spinarak",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    }
  }]  

const filtroKanto = [
  {"num": "001", "name": "bulbasaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "002", "name": "ivysaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "003", "name": "venusaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "004", "name": "charmander", "generation": {"num": "generation i", "name": "kanto"}}
]

const filtrojohto = [
  {"num": "167", "name": "spinarak", "generation": {"num": "generation ii", "name": "johto"}}
]

const ordenadoAZ = [
  {"num": "001", "name": "bulbasaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "004", "name": "charmander", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "002", "name": "ivysaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "167", "name": "spinarak", "generation": {"num": "generation ii", "name": "johto"}},
  {"num": "003", "name": "venusaur", "generation": {"num": "generation i", "name": "kanto"}}
]
const ordenadoZA = [
  {"num": "003", "name": "venusaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "167", "name": "spinarak", "generation": {"num": "generation ii", "name": "johto"}},
  {"num": "002", "name": "ivysaur", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "004", "name": "charmander", "generation": {"num": "generation i", "name": "kanto"}},
  {"num": "001", "name": "bulbasaur", "generation": {"num": "generation i", "name": "kanto"}}
]

describe('filtrarGeneracion', () => {
  it('is a function', () => {
    expect(typeof filtrarGeneracion).toBe('function');
  });

  it('La función filtrarGeneracion debe retornar los pokemon de la generación Kanto', () => {
    expect(filtrarGeneracion(data, 'kanto')).toEqual(filtroKanto);
  });
  it('La función filtrarGeneracion debe retornar los pokemon de la generación Johto', () => {
    expect(filtrarGeneracion(data, 'johto')).toEqual(filtrojohto);
  });
});


describe('sort', () => {
  it('is a function', () => {
    expect(typeof sort).toBe('function');
  });

  it('La función sort debe retornar un array ordenado de forma ascendente de A a Z', () => {
    expect(sort(data, "name", "A-Z")).toEqual(ordenadoAZ);
  });

  it('La función sort debe retornar un array ordenado de forma descendente de Z a A', () => {
    expect(sort(data, "name", "Z-A")).toEqual(ordenadoZA);
  });
});

describe('computeStats', () =>{
  it('is a function', () =>{
    expect(typeof computeStats).toBe('function');
  });

  it('La función computeStats debe retornar el porcentaje de los pokemon que pertenece a cada generación', ()=>{
    //let total = 5
    //let porcentaje = (4 * 100) / total
    expect(computeStats("kanto", data)).toEqual("80.00");
  });
  it('La función computeStats debe retornar el porcentaje de los pokemon que pertenece a cada generación', ()=>{
    //let total = 1
    //let porcentaje = (1 * 100) / total
    expect(computeStats("johto", data)).toEqual("20.00");
  })
});
