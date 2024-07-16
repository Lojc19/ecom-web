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
import { useLoading } from "../../context/loading";

const Layout = ({ children, title, description}) => {
    const [showChatbot, setShowChatbot] = useState(false);
    const { loading } = useLoading();
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
        {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-500">
            <div
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
            <div
                className="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status">
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
            </div>
        )}    
        <Footer />
        </>   
    );
};

Layout.defaultProps = {
    title: "Ecommerce App",
    description: "Mern Stack project",
};

export default Layout;
