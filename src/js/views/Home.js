import React, {useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Contact from "../component/Contact";


export const Home = () => {
	const getUserAgendaURL = "https://playground.4geeks.com/contact/agendas/AntonioBG89";
	const getContactsURL = "https://playground.4geeks.com/contact/agendas/AntonioBG89/contacts";

	const [contact, setContact] = useState([]);
	const [newContact, setNewContact] = useState("");

	const createUserAgenda = () => {
		const newUserAgenda = {"slug": "AntonioBG89", "contacts": []};
		fetch(getUserAgendaURL, {
			method: "POST",
			body: JSON.stringify(newUserAgenda),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => console.log("User agenda created:", data))
		.catch(error => console.error("Error creating user agenda:", error));
	};

	useEffect(()=>{createUserAgenda()}, []);

	const addContact = () => {
		const newContact = {
            "name": "",
            "phone": "",
            "email": "",
            "address": "",
        };
		fetch(getContactsURL, {
			method: "POST",
			body: JSON.stringify(newContact),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log("Contact added:", data);
			setContact([...contact, data]);
		})
		.catch(error => console.error("Error adding ToDo:", error));
		
	};


	return (
	<div className="text-center mt-5">
		<Link to="/new-contact">
		<button className="btn btn-success">Crear Nuevo Contacto</button>
		</Link>
		<h1>Lista de Contactos</h1>
		<Contact />
	</div>
);
};
