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
      const data = (await axios.get('/api/pets')).data;
      setPetData(data);
    };
    getPets();
  }, []);

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={petData} />
    </>
  )
}

export default Root;
