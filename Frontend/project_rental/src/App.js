 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 
import Router from './Router/Router';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Router/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
