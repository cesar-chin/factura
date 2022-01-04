import Numero from './components/Numero/Numero';
import { Encabezado } from './components/Encabezado/Encabezado';
import Detalle2 from './components/Detalle/Detalle2';
import {ClienteNuevo} from './components/Encabezado/ClienteNuevo';
import Negocio from './components/Negocio/Negocio';
import Panel from './components/Panel/Panel';
import ValoresConfiguracion from "./components/ValoresConfiguracion";
import { Emisor } from './components/Emisor/Emisor';
import Logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (

      <>
          <table>
              <tr> 
                  <td> <img src={Logo} width={"100"} height={"100"}/></td> 
                  { <td><Negocio/>  </td> }
                </tr>
                
                <tr> 
                  <td> Configuración</td>    
                </tr>                 
                <tr>               
                  { <td><ValoresConfiguracion/>  </td> }
                </tr>
            </table>
          {/* <Filtros /> */}
          <Panel /> 
          <p></p>            
            <div>                         
                 <table className='table table-bordered'>
                  <tr><td><h4>EMISOR</h4></td></tr>          
                  <tr><td><Emisor/></td></tr>              
                  { <tr><td><Numero/></td></tr>               }
                  { <tr><td><h4>DATOS DEL CLIENTE</h4></td></tr>           }
                  { <tr><td><Encabezado /></td></tr> }
                  { <tr><td><ClienteNuevo/></td></tr>            }
                  { <tr><td><h4>DETALLE</h4></td></tr>           }
                  { <tr><td><Detalle2/></td></tr>           }
                         
                </table>             
        </div>
      </>

  );
} 

export default App;