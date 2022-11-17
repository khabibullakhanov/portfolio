import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import { NotFounded } from "./Pages/NotFounded/NotFounded";
import { About } from "./Pages/About/About";
import { Footer } from "./Companents/Footer/Footer";
import { Navbar } from "./Companents/Navbar/Navbar";
import { Portfolios } from "./Pages/Portfolios/Portfolios"
import { Contact } from "./Pages/Contact/Contact"
import "./Assets/Css/Global.css";


export function Router() {
    return (
        <div id="router">
            <Navbar />
            <Routes id="router-center">
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFounded />} />
            </Routes>
            <Footer />
        </div>
    );
}
