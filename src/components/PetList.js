import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [selected, setSelected] = React.useState('all');

  React.useEffect(() => {
    switch (selected) {
      case 'all':
        console.log('all selected')
        document.querySelector('.pet-list').appendChild = props.pets.map(pet => <SinglePet key={pet.id} pet={pet}/>).join('');
        break;
      case 'cats':
        console.log('cats selected')
        document.querySelector('.pet-list').appendChild = props.pets.map(pet => <SinglePet key={pet.id} pet={pet}/>).filter(pet => pet.species === 'cat').join('');
        break;
      case 'dogs':
        console.log('dogs selected')
        document.querySelector('.pet-list').appendChild = props.pets.map(pet => <SinglePet key={pet.id} pet={pet}/>).filter(pet => pet.species === 'dog').join('');
        break;
    }
  }, [selected])

  return (
    <>
      <select>
        <option onClick={() => setSelected('all')}>All</option>
        <option onClick={() => setSelected('cats')}>Cats</option>
        <option onClick={() => setSelected('dogs')}>Dogs</option>
      </select>
      <div className="pet-list">
        {props.pets.map(pet => <SinglePet key={pet.id} pet={pet}/>)}
      </div>
    </>
  )
}

export default PetList;
