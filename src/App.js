import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Main from './pages/Main';
import Pc from './pages/Pc';
import Tablet from './pages/Tablet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/pcmode" element={<Pc/>}/>
          <Route path="/tabmode" element={<Tablet/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
