import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Home from './pages/home/Home';
  



function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;