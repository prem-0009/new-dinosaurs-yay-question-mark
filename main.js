const makeDino = function (name, time, eatsMeat, living = false) {
  const dino = {
    species: name,
    period: time,
    carnivore: eatsMeat,
    extinct: living,
  };

  return dino;
};

const makeSingular = function (dino) {
  // const withoutUS = {};
  let newSpecies;
  if (dino.species.slice(-2) === "us") {
    newSpecies = dino.species.slice(0, -2);
  } else {
    newSpecies = dino.species;
  }
return makeDino(newSpecies,dino.period, dino.carnivore, dino.extinct)
  
};

const truncateSpecies = function (dino) {
  let truncatedDino;
  if (dino.species.length > 10) {
    truncatedDino = dino.species.slice(0, 7) + "...";
  } else {
    truncatedDino= dino.species;
  }
   return makeDino(truncatedDino, dino.period, dino.carnivore, dino.extinct)
  
};

const makeExtinct = function (dino) {
  return makeDino(dino.species, dino.period, dino.carnivore, dino.extinct = true)
};

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
};

// console.log(Math)
