import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Header/Navbar/Navbar"
const Layout = ({ children, title, description}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            <Navbar/>
        <main>
            <ToastContainer />
        {children}
        </main>
        <Footer />
        </>   
    );
};

Layout.defaultProps = {
    title: "Ecommerce App",
    description: "Mern Stack project",
};

export default Layout;
