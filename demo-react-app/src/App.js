import React, { useState , Fragment} from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import data from './test-data.json';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {

  const[contacts, setContacts]  = useState(data);
  const[addFormData,setAddFormData] = useState({
    firstName:'',
    lastName:'',
    fullName:'',
    presentAddress:'',
    permanentAddress:'',
    city:'',
    state:'',
    postalCode:'',
    phoneNo:'',
    emailAddress:'',
  });

  const[editformData,setEditFormData] = useState({
    firstName:'',
    lastName:'',
    fullName:'',
    presentAddress:'',
    permanentAddress:'',
    city:'',
    state:'',
    postalCode:'',
    phoneNo:'',
    emailAddress:'',
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const  fieldValue = event.target.value;

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editformData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id:nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      fullName: addFormData.fullName,
      presentAddress: addFormData.presentAddress,
      permanentAddress: addFormData.permanentAddress,
      city: addFormData.city,
      state: addFormData.state,
      postalCode: addFormData.postalCode,
      phoneNo: addFormData.phoneNo,
      emailAddress: addFormData.emailAddress
    };

    const newContacts = [...contacts, newContacts];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id:addFormData.id,
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      fullName: addFormData.fullName,
      presentAddress: addFormData.presentAddress,
      permanentAddress: addFormData.permanentAddress,
      city: addFormData.city,
      state: addFormData.state,
      postalCode: addFormData.postalCode,
      phoneNo: addFormData.phoneNo,
      emailAddress: addFormData.emailAddress
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event,contacts) => {
    debugger
    event.preventDefault();
    setEditContactId(contacts.id)

    const formValues = {
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      fullName: addFormData.fullName,
      presentAddress: addFormData.presentAddress,
      permanentAddress: addFormData.permanentAddress,
      city: addFormData.city,
      state: addFormData.state,
      postalCode: addFormData.postalCode,
      phoneNo: addFormData.phoneNo,
      emailAddress: addFormData.emailAddress
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  
  return (
    <div className="App-container">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
         <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Full Name</th>
          <th>Present Address</th>
          <th>Permanent Address</th>
          <th>City</th>
          <th>State</th>
          <th>Postal Code</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
           <Fragment>
           {editContactId === contact.id ? (
             <EditableRow
               editFormData = {editformData}
               handleEditFormChange={handleEditFormChange}
               handleCancelClick={handleCancelClick}
             />
           ) : (
             <ReadOnlyRow
               contact={contact}
               handleEditClick={handleEditClick}
               handleDeleteClick={handleDeleteClick}
             />
           )}
         </Fragment>
           ))}
        </tbody>
      </table>
      </form>
      <h2>Add a Employee</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="firstName"required="required" placeholder="Enter first name..." onChange={handleAddFormChange}/>
        <input type="text" name="lastName"required="required" placeholder="Enter last name..." onChange={handleAddFormChange}/>
        <input type="text" name="fullName"required="required" placeholder="Enter full name..." onChange={handleAddFormChange}/>
        <input type="text" name="presentAddress"required="required" placeholder="Enter present address..." onChange={handleAddFormChange}/>
        <input type="text" name="permanentAddress"required="required" placeholder="Enter permanent address..." onChange={handleAddFormChange}/>
      </form>
      <br></br>
      <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="city"required="required" placeholder="Enter city..." onChange={handleAddFormChange}/>
        <input type="text" name="state"required="required" placeholder="Enter state..." onChange={handleAddFormChange}/>
        <input type="text" name="postalCode"required="required" placeholder="Enter postal code..." onChange={handleAddFormChange}/>
        <input type="text" name="phoneNo"required="required" placeholder="Enter phone no..." onChange={handleAddFormChange}/>
        <input type="text" name="emailAddress"required="required" placeholder="Enter email address..." onChange={handleAddFormChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
