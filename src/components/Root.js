import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
// import samplePets from '../petdata';

const Root = () => {
  const [petData, setPetData] = React.useState([]);

  React.useEffect(() => {
    const getPets = async () => {
      setPetData((await axios.get('/api/pets')).data);
    };
    getPets();
  }, []);

  return (
    <>
      <h1>Adoption Center</h1>
      { petData.length > 0 ? <PetList pets={petData}/> : <p>Loading Pets...</p>}
    </>
  )
}

export default Root;
