import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadContacts();
    }, []);

	 // Asegúrate de que contacts es un array antes de hacer map
	 // Asegúrate de que contacts.contacts (o la propiedad correcta) es un array
	 if (!store.contacts || !Array.isArray(store.contacts.contacts)) {
        return <p>Loading contacts...</p>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/new-contact">
                        <button className="btn btn-success">Add new contact</button>
                    </Link>
                    <div className="list-group">
					{store.contacts.contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
