global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [{
    'name': 'Bulbasaur',
    'egg': '2 km',
    'num': '001',
    'type': 'Grass'
  },
  {
    'name': 'Charmander',
    'egg': '2 km',
    'num': '004',
    'type': 'Fire'
  },
  {
    'name': 'Squirtle',
    'egg': '2 km',
    'num': '007',
    'type': 'Water'
  },
  {
    'name': 'Ekans',
    'egg': '5 km',
    'num': '023',
    'type': 'Poison'
  }
];

const arr = [[{
  'name': 'Bulbasaur',
  'egg': '2 km',
  'num': '001',
  'type': 'Grass'
}], [{
  'name': 'Charmander',
  'egg': '2 km',
  'num': '004',
  'type': 'Fire'
}], [{
  'name': 'Squirtle',
  'egg': '2 km',
  'num': '007',
  'type': 'Water'
}], [{
  'name': 'Ekans',
  'egg': '5 km',
  'num': '023',
  'type': 'Poison'
}]];

describe('filterPokeType', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterPokeType, 'function')
  });

  it('debería retornar el objeto Squirtle al filtrar por tipo Agua', () => {
    assert.deepEqual(window.filterPokeType(data, 'Water'), [{
      'name': 'Squirtle',
      'egg': '2 km',
      'num': '007',
      'type': 'Water'
    }])
  });

  it('debería retornar el objeto Ekans al filtrar por Huevo 5 km', () => {
    assert.deepEqual(window.filterPokeEggs(data, '5 km'), [{
      'name': 'Ekans',
      'egg': '5 km',
      'num': '023',
      'type': 'Poison'
    }])
  });
})

describe ('sorting', ()=> {
  it('deberia ser una funcion', () => {
    assert.equal(typeof sorting, 'function')
  });

  it('deberia retornar objetos Bulbasaur, Charmander, Ekans, Squirtle al ordenar de la A a la Z', () => {
    assert.deepEqual(window.sorting(data, 'name', 'asc'), [{
        'name': 'Bulbasaur',
        'egg': '2 km',
        'num': '001',
        'type': 'Grass'
      },
      {
        'name': 'Charmander',
        'egg': '2 km',
        'num': '004',
        "type": "Fire"
      },
      {
        'name': 'Ekans',
        'egg': '5 km',
        'num': '023',
        'type': 'Poison'
      },
      {
        'name': 'Squirtle',
        'egg': '2 km',
        'num': '007',
        'type': 'Water'
      }
    ])
  });

  it('deberia retornar objetos Squirtle, Ekans, Charmander, Bulbasaur al ordenar de la Z a la A', () => {
    assert.deepEqual(window.sorting(data, 'name', 'des'), [{
        'name': 'Squirtle',
        'egg': '2 km',
        'num': '007',
        'type': 'Water'
      },
      {
        'name': 'Ekans',
        'egg': '5 km',
        'num': '023',
        "type": "Poison"
      },
      {
        'name': 'Charmander',
        'egg': '2 km',
        'num': '004',
        'type': 'Fire'
      },
      {
        'name': 'Bulbasaur',
        'egg': '2 km',
        'num': '001',
        'type': 'Grass'
      }
    ])
  });
})

describe ('computeStats', ()=> {
  it('deberia ser una funcion', () => {
    assert.equal(typeof computeStats, 'function')
  });

  it('deberia retornar 100 al calcular entre 4 objetos', () => {
    assert.deepEqual(window.computeStats(arr,data),100)
  });
})

