import React  from 'react';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter} from "react-router-dom";
import  "./App.css"
function App() {
  return (
   <div>
    <BrowserRouter>
      <NavigationBar/>
    </BrowserRouter>
   </div>
  );
}

export default App;
