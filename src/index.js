import React from 'react';
import ReactDOM from 'react-dom';
import Configuracion from './components/Configuracion';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// Se importa el "store"
import storeF from './redux/store'

// Para conectar Redux con React se importa el siguiente paquete
import { Provider } from 'react-redux';

const store = storeF();


ReactDOM.render(<Provider store={store}>

  <React.StrictMode>
    {/* Envuelvo el componente padre en el Router */}
    <Router>  
      {/* Agrego las rutas */}
      <Routes>      
        <Route path='/' element={<App/>} />        
        { <Route path='configuracion/:id' element={<Configuracion />} /> }
        <Route
          path='*'
          element={
            <div className='container text-center' styles="body">
              <p>No hay datos para mostrar</p>
            </div>
          }
        />
      </Routes>
      {/* <App /> */}
    </Router>
  </React.StrictMode> </Provider>, document.getElementById('root') 
);

serviceWorker.unregister();






// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Root from './Root';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   // document.getElementById('cuerpo')
//   document.querySelector('#cuerpo')
// );
