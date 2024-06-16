import React , { useState } from "react";
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
import { FaRegMessage } from "react-icons/fa6";

const Layout = ({ children, title, description}) => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(prevState => !prevState);
    };
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
        {showChatbot && (
            <div className="fixed bottom-4 right-4">
                <div className="mb-24">
                    <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    />
                </div>
            </div>
        )}
        <div className="fixed bottom-4 right-4">
            <div className=" bg-blue-500 p-6 rounded-full  cursor-pointer" onClick={toggleChatbot}>
                <FaRegMessage className=""/>
            </div>
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
