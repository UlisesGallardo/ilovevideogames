/*import './App.css';
import React from "react";
import NavbarLateral from './components/navbar';
import TopPageMetacritic from "./components/TopPageMetacritic"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoGame from './components/InfoGame';
import ImageGenerationForm from './components/ImageGenerationForm';

function App() {
  return (
    <BrowserRouter>
      <NavbarLateral/>
      <Routes>
        <Route path="/" element={<TopPageMetacritic/>}/>
        <Route path="/info" element={<InfoGame/>}/>
        <Route path="/TopPageMetacritic" element={<TopPageMetacritic/>}/>
        <Route path="/arteGenerativo" element={<ImageGenerationForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
