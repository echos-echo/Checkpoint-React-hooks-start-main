import axios from 'axios';
import React from 'react';

const DeletePet = (props) => {
    const [deleted, setDeleted] = React.useState(false);

    const tryRemovePet = async petId => {
        try {
            await axios.delete(`/api/pets/${petId}`);

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <button onClick={() => tryRemovePet(props.id)}>Remove Pet From List</button>
        </div>
    )
};

export default DeletePet;