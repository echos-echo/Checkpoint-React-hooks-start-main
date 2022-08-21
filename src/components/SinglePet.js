import React from 'react';

function SinglePet(props) {
  const [adoptionStatus, setAdoptionStatus] = React.useState(false);

  return (
    // <div className={`single-pet`}>
    <div className={adoptionStatus ? `single-pet adopted` : `single-pet` }>
      <h1>{props.pet.name}</h1>
      <p>{props.pet.species}</p>
      <p>{props.pet.description}</p>
      <hr/>
      <p>{adoptionStatus ? "Adopted!" : "Available"}</p>
      <button onClick={() => setAdoptionStatus(!adoptionStatus)}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
