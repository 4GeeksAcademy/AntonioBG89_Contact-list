import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../component/navbar';

const NewContact = () => {
  const navigate = useNavigate();

  

  function createContact() {
    // fetch(getUserURL, {
		// 	method: "POST",
		// 	body: JSON.stringify(""),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })
		// .then(response => response.json())
		// .then(data => console.log("User created:", data))
		// .catch(error => console.error("Error creating user:", error));

    navigate('/');
  }

  return (
    <div className='container mt-5'>
        <h4>Aquí vamos a crear los contactos nuevos</h4>
        <h3>Aquí el formulario del usuario</h3>
        <button className='btn btn-success' onClick={()=>{
          createContact();
        }}>Crear contacto</button>
    </div>
  )
};

export default NewContact;