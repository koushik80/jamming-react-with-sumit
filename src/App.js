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
  {name:'', species:''},
];

let dogs = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}

console.log(dogs);
