import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
// import samplePets from '../petdata';

const Root = () => {
  // the state of the error message, if there is any
  const [errMessage, setErr] = React.useState(null);
  // the state of pet data, fetched in useEffect
  const [petData, setPetData] = React.useState([]);

  React.useEffect(() => {
    const getPets = async () => {
      try {
        setPetData((await axios.get('/api/pets')).data);
      } catch(err) {
        // if an error occurs, the code and message are saved to errMessage state
        setErr(`${err.code}: ${err.message}`);
      }
    };
    // attempts to get the pets
    getPets();
  }, []);

  return (
    <>
      <h1>Adoption Center</h1>
      {/* if the request gets data, loads the data.
      if an error occurred while attempting to get data, the error will print.
      otherwise, a loading screen */}
      { petData.length > 0 ? <PetList pets={petData}/> :
      errMessage != null ? <p>{errMessage}</p> : <p>Loading Pets...</p>}
    </>
  )
}

export default Root;
