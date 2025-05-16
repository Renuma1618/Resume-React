import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenukaProfile from "./RenukaProfile";
import Products from './components/products';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <RenukaProfile />
      <Products/>
    
      
      
    </div>
  );
}

export default App;