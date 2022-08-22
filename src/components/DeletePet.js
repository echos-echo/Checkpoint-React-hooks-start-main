import axios from 'axios';
import React from 'react';

const DeletePet = (props) => {
    const [deleted, setDeleted] = React.useState(false);

    // async function to make the delete request
    const tryRemovePet = async petId => {
        try {
            await axios.delete(`/api/pets/${petId}`);

        } catch(err) {
            console.error(err);
        }
    }

    React.useEffect(() => {
        // if the deleted state was triggered, the node with this button inside it will be removed
        if (deleted) {
        const removedPet = document.getElementById(props.petId);
        document.getElementById(props.petId).parentNode.removeChild(removedPet);}
    }, [deleted]);

    return (
        <div>
            {/* when the delete button is clicked, it will both remove and set the state to true */}
            <button onClick={() => {tryRemovePet(props.petId); setDeleted(true);}}>Remove Pet From List</button>
        </div>
    )
};

export default DeletePet;