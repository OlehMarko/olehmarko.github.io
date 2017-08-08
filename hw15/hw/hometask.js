function extend (destination, sources) {
  for (var i = 1; i < arguments.length; i++) {
    var nextObject = arguments[i];
      for (var nextKey in nextObject) {
        if (nextKey === undefined || nextKey === null) {
          continue;
        }
        destination[nextKey] = nextObject[nextKey];
      }
    }
  return destination;
};


var Character = function(nameAttackHealth) {
  this.name = nameAttackHealth.name;
  this.totalHitpoints = nameAttackHealth.hitpoints;
  this.hitpoints = nameAttackHealth.hitpoints;
  this.attack = nameAttackHealth.attack;
}
Character.prototype.getHitpoints = function() {
  return this.hitpoints;
}
Character.prototype.setHitpoints = function(hitpoints) {
  if (hitpoints <= this.totalHitpoints) {
    this.hitpoints = hitpoints;
  } else {
    this.hitpoints = this.totalHitpoints;
  }
}

Character.prototype.getTotalHitPoints = function() {
  return this.totalHitpoints;
}
Character.prototype.setTotalHitpoints = function(hitpoints) {
  this.totalHitpoints = hitpoints;

}

Character.prototype.getAttack = function() {
  return this.attack;
}
Character.prototype.setAttack = function(attack) {
  this.attack = attack;
}
Character.prototype.fight = function(target) {
  if (target.isAlive()) {
    target.hitpoints -= this.attack;
    this.train(target);
  } else {
    console.log('he is dead');
  }
}
Character.prototype.isAlive = function() {
  if (this.hitpoints > 0) {
    return true;
  } else {
    return false;
  }
}


var Champion = function(nameAttackHealth) {
  Character.call(this, nameAttackHealth);
  this.defended = false;
  /**
  *Parameter  needed for using method 'defence'
  */
}


var Monster = function(nameAttackHealth) {
  Character.call(this, nameAttackHealth);
  this.enrageProperties = {
    enrage: false,
    switcher: 0
  };
  /**
  *Parameters  needed for using method 'enrage'
  */
}

function inherit (child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

inherit(Monster, Character);
inherit(Champion, Character);
Champion.prototype.rest = function() {
  if (this.hitpoints <= this.totalHitpoints - 5) {
    this.hitpoints += 5;
  } else {
    this.hitpoints = 50;
  }
}
Champion.prototype.defence = function() {
  this.defended = true;
}
Champion.prototype.train = function(target) {
  if (!target.isAlive()) {
    this.attack++;
  }
}
/**
* Realization of ability of hero to rise his attack
*/
Monster.prototype.enrage = function() {
  this.enrageProperties.enrage = true;
  this.enrageProperties.switcher += 1;
}
Monster.prototype.feast = function(target) {
  if (!target.isAlive()) {
    this.setTotalHitpoints(this.totalHitpoints + Math.floor(target.totalHitpoints * 0.1));
    this.setHitpoints(this.hitpoints + Math.floor(target.totalHitpoints * 0.25));
  }
}
/**
*Realization of ability of monster to feast on his enemies
*/
Monster.prototype.fight = function(target) {
  if (target.isAlive()) {
    if (target.defended) {
      target.defended = false;
    } else if (this.enrageProperties.enrage && !target.defended) {
      if (this.enrageProperties.switcher < 3) {
        target.hitpoints -= this.attack * 2;
        this.enrageProperties.switcher++;
        this.feast(target);
      } else if (this.enrageProperties.switcher === 3) {
        target.hitpoints -= this.attack;
        this.enrageProperties.enrage = false;
        this.enrageProperties.switcher = 0;
        this.feast(target);
      }
    } else {
      target.hitpoints -= this.attack;
      this.feast(target);
    }
  } else {
    console.log('he is dead');
  }
}

module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}
