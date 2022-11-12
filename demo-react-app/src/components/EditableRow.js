import react from 'react'

const EditableRow = ({
    handleEditFormChange,
    editformData,
    handleCancelClick,
    }) =>{
    return (
        <tr>
        <td><input type="text" name="firstName"required="required" placeholder="Enter first name..." value={editformData.firstName} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="lastName"required="required" placeholder="Enter last name..." value={editformData.lastName} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="fullName"required="required" placeholder="Enter full name..." value={editformData.fullName} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="presentAddress"required="required" placeholder="Enter present address..." value={editformData.presentAddress} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="permanentAddress"required="required" placeholder="Enter permanent address..." value={editformData.permanentAddress} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="city"required="required" placeholder="Enter city..." value={editformData.city} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="state"required="required" placeholder="Enter state..." value={editformData.state} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="postalCode"required="required" placeholder="Enter postal code..." value={editformData.postalCode} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="phoneNo"required="required" placeholder="Enter phone no..." value={editformData.phoneNo} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="emailAddress"required="required" placeholder="Enter email address..." value={editformData.emailAddress} onChange={handleEditFormChange}/></td>
        <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
        </tr>
    );
};

export default EditableRow