import react from 'react'

const ReadOnlyRow = ( { contact , handleEditClick,handleDeleteClick } ) =>{
    return (
        <tr>
             <td>{contact.id}</td>
             <td>{contact.firstName}</td>
             <td>{contact.lastName}</td>
             <td>{contact.fullName}</td>
             <td>{contact.presentAddress}</td>
             <td>{contact.permanentAddress}</td>
             <td>{contact.city}</td>
             <td>{contact.state}</td>
             <td>{contact.postalCode}</td>
             <td>{contact.phoneNo}</td>
             <td>{contact.emailAddress}</td>
             <td>
                <button type="button" onClick={(event)=> handleEditClick(event,contact)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}> Delete</button>
             </td>
        </tr>
    );
};

export default ReadOnlyRow