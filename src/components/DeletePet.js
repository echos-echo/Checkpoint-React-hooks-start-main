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

    React.useEffect(() => {
        if (deleted === true) {
        console.log('pet removed')
        const removedPet = document.getElementById(props.petId);
        removedPet.parentNode.removeChild(removedPet);}
    }, [deleted]);

    return (
        <div>
            <button onClick={() => {
                tryRemovePet(props.petId);
                setDeleted(true);
                }}>Remove Pet From List</button>
        </div>
    )
};

export default DeletePet;