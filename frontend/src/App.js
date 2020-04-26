import React, { useState } from 'react';


import Total from './components/Total';
import MyHome from './components/MyHome';
import AddedFeatures from './components/AddedFeatures';
import ExtraFeatures from './components/ExtraFeatures';

import './App.css';

const App = () => {


  return (
    <div className="App">

      <MyHome />

      <AddedFeatures />

      <ExtraFeatures />

      <Total />
    </div>
  );
}


export default App;
