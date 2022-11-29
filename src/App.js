import React from 'react';

const App = () => {
  return (
    <div>
      Test
    </div>
  )
}

export default App;


let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'dog' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
];

/*
let dogs = animals.filter((animal) => {
    return animal.species === 'dog';
});
*/

let names = animals.map((animal) => {
  return animal.name
})


console.log(names);
