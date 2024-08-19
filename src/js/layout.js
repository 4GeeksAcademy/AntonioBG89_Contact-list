import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { NewContact } from "./views/NewContact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        {/* Ruta para mostrar la lista de contactos */}
                        <Route path="/" element={<Home />} />
                        {/* Ruta para crear un nuevo contacto */}
                        <Route path="/new-contact" element={<NewContact />} />
                        {/* Ruta para editar un contacto existente */}
                        <Route path="/edit-contact/:id" element={<NewContact />} />
                        {/* Otras rutas (por ejemplo, Demo y Single) si son necesarias */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

