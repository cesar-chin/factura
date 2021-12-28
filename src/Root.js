import React from 'react'
import { Panel } from './components/Panel/Panel';
//import { Negocio } from './components/Negocio/Negocio';
import { Emisor } from './components/Emisor/Emisor';
import { Numero } from './components/Numero/Numero';
import { Encabezado } from './components/Encabezado/Encabezado';
import { Resumen } from './components/Resumen/Resumen';
import Detalle from './components/Detalle/Detalle';
import {ClienteNuevo} from './components/Encabezado/ClienteNuevo';
import Logo from './logo.png';


import './Root.css'

import Menu from './Menu';


const Root2 = () => {
  

    return (

        <div className="Root2">              
           <div>
               <table>
                <tr> 
                  <td> <img src={Logo} width={"100"} height={"100"}/></td> 
                  {/* <td><Negocio/> </td>                     */}
                </tr>
              </table>
             <Panel /> 
             <p></p>
             </div>                   
            <div>     
              <Menu/>               
                 <table className='table table-bordered'>
                  <tr><td><h4>EMISOR</h4></td></tr>          
                  <tr><td><Emisor/></td></tr>              
                  {/* <tr><td><Numero/></td></tr>               */}
                  {/* <tr><td><h4>DATOS DEL CLIENTE</h4></td></tr>           */}
                  {/* <tr><td><Encabezado /></td></tr> */}
                  {/* <tr><td><ClienteNuevo/></td></tr>            */}
                  {/* <tr><td><h4>DETALLE</h4></td></tr>           */}
                  {/* <tr><td><Detalle/></td></tr>           */}
                  {/* <tr><td><Resumen /></td></tr>    */}
                         
                </table>             
        </div>
        </div>
      );
}

export default Root2 