import React from 'react'

export const Panel = () => {

    const sendMessage = () => {

        alert('Ejecuta acción !');
     
    }

    return (
        
        <>                         
             <tr>
                 <td><button onClick={sendMessage} class="btn btn-secondary inactive" > Configurar </button></td>
                 <td><button onClick={sendMessage} class="btn btn-secondary inactive"> Nueva </button></td>
                 <td><button onClick={sendMessage} class="btn btn-secondary inactive"> Guardar </button></td>    
                 <td><button onClick={sendMessage} class="btn btn-secondary inactive"> Enviar </button></td>    
                 <td><button onClick={sendMessage} class="btn btn-secondary inactive"> Ver factura </button></td>            
             </tr>             
                                 
        </>        
        

    )
}
