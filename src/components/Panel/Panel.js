import React from 'react'
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
                 <p></p>    
                 <Formulario/>       
                 <p></p>    
                 <Resultado/>           
             </div>             
                                 
        </>        
        
    )
}

export default Panel;
