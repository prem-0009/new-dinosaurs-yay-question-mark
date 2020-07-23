const makeDino = function (name, time, eatsMeat, living) {
  const dino = {
    species: name,
    period: time,
    carnivore: eatsMeat,
  };
  if (living === true) {
    dino.extinct = true;
  } else if (!living) {
    dino.extinct = false;
  }

  return dino;
};

const makeSingular = function (dinosaur) {
  const withoutUS = {};
  if (dinosaur.species.slice(-2) === "us") {
    withoutUS.species = dinosaur.species.slice(0, -2);
  } 
  else {
    withoutUS.species = dinosaur.species;
  }
  withoutUS.period = dinosaur.period;
  withoutUS.carnivore = dinosaur.carnivore;
  withoutUS.extinct = dinosaur.extinct;

  return withoutUS;
};

const truncateSpecies = function (dino) {
  const truncatedDino = {};
  if ( dino.species.length > 10){
    truncatedDino.species = dino.species.slice(0,7) + '...'
  } else {
    truncatedDino.species = dino.species;
  }

  truncatedDino.period = dino.period;
  truncatedDino.carnivore = dino.carnivore;
  truncatedDino.extinct = dino.extinct;

  return truncatedDino;
};

const makeExtinct = function (dino) {
  const extinctDino = {};
  extinctDino.species = dino.species;
  extinctDino.extinct=true;
  extinctDino.period = dino.period;
  extinctDino.carnivore= dino.carnivore;

  return extinctDino;

};


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
};


// console.log(Math)