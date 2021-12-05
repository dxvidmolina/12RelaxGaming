import React from 'react';
import '../assets/css/app.css';
import Resumen from './Resumen'
import Productos from './Productos'

function App() {
  return (
    <React.Fragment>
      <div>
        <Productos />
      </div>
    </React.Fragment>
    
  );
}

export default App;
