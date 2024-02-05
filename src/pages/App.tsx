import React from 'react';
import '../styles/App.css';
import HomePage from '../pages/HomePage';
import FaqPage from "../pages/FaqPage";
import RsvpPage from "../pages/RsvpPage";

function App() {
  return (
    <React.StrictMode>
      {/* <HomePage /> */}
      <FaqPage />
      {/* <RsvpPage /> */}
    </React.StrictMode>
  );
}

export default App;
