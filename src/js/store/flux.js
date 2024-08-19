const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addAgenda: async(agenda) => {
				const resp = await fetch('https://playground.4geeks.com/contact/agendas/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(agenda)
				});
				if (resp.ok) getActions().loadContacts();
			},

			loadContacts: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/AntonioBG89/contacts');
					const data = await resp.json();
					console.log("Contacts loaded: ", data);  // Aquí deberías ver la estructura del objeto
					setStore({ contacts: data });
				} catch (error) {
					console.error("Error al cargar contactos:", error);
				}
			},			
	
			addContact: async (contact) => {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/AntonioBG89/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
                            "name": contact.full_name,
                            "email": contact.email,
                            "address": contact.address,
                            "phone": contact.phone
                        })
					});
					if (resp.ok) getActions().loadContacts();
				},
			
			editContact: async (id, updatedContact) => {
                const resp = await fetch(`https://playground.4geeks.com/contact/agendas/AntonioBG89/contacts/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedContact)
                });
                if (resp.ok) getActions().loadContacts();
            },

            deleteContact: async (id) => {
                const resp = await fetch(`https://playground.4geeks.com/contact/agendas/AntonioBG89/contacts/${id}`, {
                    method: 'DELETE'
                });
                if (resp.ok) getActions().loadContacts();
            },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
