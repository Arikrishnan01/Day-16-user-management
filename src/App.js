import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="main">
      <h2 className='main-header'>Users Crud Operation</h2>
        <Routes>
          <Route path ="/create" element ={ <Create/> } />
          <Route path ="/" element ={ <Read/> } />
          <Route path ="/update/:id" element ={ <Update/> } />
        </Routes>
    </div>
  );
}

export default App;
