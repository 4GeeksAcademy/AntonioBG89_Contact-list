import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    return (
        <div className="list-group-item list-group-item-action">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src="https://via.placeholder.com/150" alt="Contact" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <label className="name lead">{contact.full_name}</label>
                    <br />
                    <span className="text-muted small">{contact.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted"></span>
                    <span className="text-muted small">{contact.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted"></span>
                    <span className="text-muted small text-truncate">{contact.email}</span>
                    <br />
                    <Link to={`/edit/${contact.id}`}>
                        <button className="btn btn-sm btn-primary">Edit</button>
                    </Link>
                    <button className="btn btn-sm btn-danger" onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
