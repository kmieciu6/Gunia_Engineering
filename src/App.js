import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './scss/main.scss';
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/services' element={<Services/>}/>
                    <Route exact path='/portfolio' element={<Portfolio/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                    <Route path='/*' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;