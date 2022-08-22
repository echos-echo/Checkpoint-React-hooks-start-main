import React from 'react';

function SinglePet(props) {
  // selected will be true if there is a true in localStorage, which will evaluate the expression to true
  const [adoptionStatus, setAdoptionStatus] = React.useState(localStorage.getItem(props.pet.name) === 'true');

  React.useEffect(() => {
    localStorage.setItem(props.pet.name, adoptionStatus);
  }, [adoptionStatus])

  return (
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
