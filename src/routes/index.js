import React from 'react';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato'
import {Routes, Route} from 'react-router-dom';


const AppRoutes = () => (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<Sobre />} /> 
        <Route path="/contato" element={ <Contato />} />
    </Routes>
)

export default AppRoutes;