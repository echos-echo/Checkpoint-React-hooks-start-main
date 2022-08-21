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

  const handleSelected = function(event) {
    setSelected(event.target.value);
  }

  return (
    <>
      <select value={selected} onChange={handleSelected}>
        <option value='all'>All</option>
        <option value='cat'>Cats</option>
        <option value='dog'>Dogs</option>
      </select>
      <div className="pet-list">
        {/* if all pets are selected, will render all. otherwise will render the pet type selected */}
        {selected === 'all' ? props.pets.map(pet => <SinglePet key={pet.id} pet={pet}/>) :
          props.pets.map(pet => { if (pet.species === selected ) return <SinglePet key={pet.id} pet={pet}/>})}
      </div>
    </>
  )
}

export default PetList;
