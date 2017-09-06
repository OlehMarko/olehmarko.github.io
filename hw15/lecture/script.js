var Pokemon = function(size) {
  this.height = size.height;
  this.weight = size.weight;
  this.walking = true;
}

Pokemon.prototype.canWalk = function() {
  return this.walking;
};

Pokemon.prototype.getType = function() {
  return this.type;
};

Pokemon.prototype.getSpecie = function() {
  return this.specie;
};

Pokemon.prototype.canFly = function() {
  return this.flying;
}

Pokemon.prototype.getHeight = function () {
  return this.height;
}

Pokemon.prototype.getHeight = function () {
  return this.weight;
}

Pokemon.prototype.getPokemonType = function () {
  return this.pokemonType;
}

function extend(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

var Charmander = function(size) {
  Pokemon.call(this, size);
  this.type = 'Fire';
  this.specie = 'lizard';
  this.flying = false;

}

var Charmeleon = function (size) {
  Charmander.call(this, size);
  this.type = 'Fire';
  this.specie = 'flame';
  this.flying = false;
}

var  Charizard = function (size) {
  Charmeleon.call(this, size);
  this.type = 'Fire';
  this.specie = 'flame';
  this.flying = true;
}

extend(Charmander, Pokemon);
extend(Charmeleon, Charmander);
extend(Charizard, Charmeleon);

var embury = new Charmander({ height: 1, weight: 15 });;
var mercury = new Charmeleon({ height: 2, weight: 45 });
var morderbrand = new Charizard({ height: 10, weight: 200 });
var Eevee = function(size) {
  Pokemon.call(this, size);
  this.pokemonType = 'Eevee';
  this.type = 'normal';
  this.flying = false;
  this.level = 0;
  this.waterStone = false;
  this.thunderStone = false;
  this.fireStone = false;
}

var Pichu = function (size) {
  Pokemon.call(this, size);
  this.pokemonType = 'Pichu';
  this.type = 'electric';
  this.flying = false;
  this.level = 1;
}

var Slowpoke = function (size) {
  Pokemon.call(this, size);
  this.pokemonType = 'Slowpoke';
  this.type = 'water, physic';
  this.level = 1;
  this.kingsRock = false;
}

extend(Eevee, Pokemon);
extend(Pichu, Pokemon);

Eevee.prototype.evolve = function () {
  if (this.waterStone) {
    this.pokemonType = 'Vaporeon';
    this.type = 'water';
    this.level = 15;
  } else if (this.thunderStone) {
    this.pokemonType = 'Jolteon';
    this.type = 'electric';
    this.level = 15;
  } else if (this.fireStone) {
    this.pokemonType = 'Flareon';
    this.type = 'fire';
    this.level = 15;
  };
}

Pichu.prototype.evolve = function () {
  if (this.pokemonType = 'Pichu') {
    this.pokemonType = 'Pikachu';
    this.level = 15;
  } else if (this.pokemonType = 'Pikachu') {
    this.pokemonType = 'Raichu';
    this.level = 25;
  }
}

Slowpoke.prototype.evolve = function () {
  if (this.kingsRock) {
    this.pokemonType = 'Slowking';
  } else {
    this.pokemonType = 'Slowbro';
  }
}

var eevee = new Eevee({height: 1, weight: 15});
var pichu = new Pichu({height: 1, weight: 15});
var slow = new Slowpoke({height: 1, weight: 15});


eevee.evolve();
pichu.evolve();
slow.evolve();
console.log(eevee);
console.log(pichu);
console.log(slow);
