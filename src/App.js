import React from 'react';
import logo from './logo.svg';
import './App.css';
import My_practice from './practice_file.js';

function App() {
  return (
    <div>
        <My_practice dishName="Chicken Shwarma" sweetDish="Custurd"/>

        <hr/>

        <My_practice dishName="Chicken Nihari" sweetDish="jalebi"/>

        <hr/>

        <My_practice dishName="Chicken Biryani" sweetDish="Kheer"/>
    </div>
  );
}

export default App;
