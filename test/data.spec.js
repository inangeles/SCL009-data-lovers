global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterPokeType', () => {
  const data = [{
    "name": "Bulbasaur",
    "type": "Grass",
    },
    {
    "name": "Charmander",
    "type": "Fire",
    },
    {
    "name": "Squirtle",
    "type": "Water"
    }];

    it('debería ser una función', () => {
      assert.equal(typeof filterPokeType, 'function')
    });
  
    it('debería retornar el objeto Squirtle al filtrar por tipo Agua', () => {
    assert.deepEqual(window.filterPokeType(data, 'Water'), [
      {'name':'Squirtle', 'type':'Water'}])
    });
})

