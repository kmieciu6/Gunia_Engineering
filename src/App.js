import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './scss/main.scss';
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/services' element={<Services/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/privacy_policy' element={<PrivacyPolicy/>}/>
                    <Route path='/*' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;