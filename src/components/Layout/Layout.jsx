import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Header/Navbar/Navbar"
import config from "../Chatbot/Config";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import '../../App.css'

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
        <div className="flex flex-grow w-full justify-center">
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
        </div>
        <Footer />
        </>   
    );
};

Layout.defaultProps = {
    title: "Ecommerce App",
    description: "Mern Stack project",
};

export default Layout;
