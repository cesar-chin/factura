import React from 'react'
import Facturas from '../Consulta/Facturas';
import Formulario from './Formulario/Formulario';
import Resultado from './Resultado/Resultado';

const Panel = () => {

    const sendMessage = () => { 

        alert('Ejecuta acción !');
     
    }

    return (
        
        <>                         
             <div>                 
                 <button onClick={sendMessage} class="btn btn-secondary inactive"> Facturas procesadas </button>
                 <Facturas/>
                 <p></p>    
                 <Formulario/>       
                 <p></p>    
                 <Resultado/>           
             </div>             
                                 
        </>        
        
    )
}

export default Panel;
