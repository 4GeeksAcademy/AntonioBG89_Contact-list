import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));
            setContact(contactToEdit || {});
        }
    }, [id, store.contacts]);

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            actions.editContact(id, contact);
        } else {
            actions.addContact(contact);
        }
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{id ? "Edit Contact" : "Add a new contact"}</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="full_name"
                            className="form-control"
                            placeholder="Full Name"
                            value={contact.full_name || ''}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={contact.email || ''}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            value={contact.phone || ''}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Enter address"
                            value={contact.address || ''}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary">Save</button>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
