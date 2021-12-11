import React from 'react'
import { Detalle } from './components/Detalle/Detalle';
import { Panel } from './components/Panel/Panel';
import { Negocio } from './components/Negocio/Negocio';
import { Slogan } from './components/Slogan/Slogan';
import { Emisor } from './components/Emisor/Emisor';
import { Consecutvo } from './components/Consecutivo/Consecutivo';
import { Encabezado } from './components/Encabezado/Encabezado';
import { Resumen } from './components/Resumen/Resumen';

import './Root.css'

const Root = () => {
    return (
        <div className="Root">              
              <table>
                  <tr><td><Panel /></td></tr>              
              </table>    
              <table>
                  <tr><td><Negocio/><p><Slogan/></p></td><td>LOGO</td></tr>                                                             
              </table>    
              <table>
                  <tr><td>EMISOR</td></tr>          
                  <tr><td><Emisor /></td><td><Consecutvo /></td></tr>              
              </table>
              <table>
                  <tr><td>DATOS DEL CLIENTE</td></tr>          
                  <tr><td><Encabezado /></td></tr>              
              </table>
              <table>
                  <tr><td>DETALLE</td></tr>          
                  <tr><td><Detalle /></td></tr>          
              </table>
              <table>    
                  <tr><td></td><td><Resumen /></td></tr>              
              </table>             
        </div>
      );
}

export default Root 