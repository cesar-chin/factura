import React from 'react'
import { Inventory } from './components/Inventory/Inventory';
import { Panel } from './components/Panel/Panel';
import { Vendedor } from './components/Vendedor/Vendedor';
import { Slogan } from './components/Slogan/Slogan';
import { Emisor } from './components/Emisor/Emisor';
import { Consecutvo } from './components/Consecutivo/Consecutivo';
import { Encabezado } from './components/Encabezado/Encabezado';
import './Root.css'




const Root = () => {
    return (
        <div className="Root">              
              <table>
              <tr><td><Panel /></td></tr>              
              <tr><td><Vendedor/><p><Slogan/></p></td><td>LOGO</td></tr>                                                             
              <tr><td><Emisor /></td><td><Consecutvo /></td></tr>              
              <tr><td><Encabezado /></td></tr>              
              </table>

              {/* <section>
                    <h1 style={{ textAlign:'center' }} >Videojuegos</h1>
                    <Inventory />
              </section> */}
        </div>
      );
}

export default Root 