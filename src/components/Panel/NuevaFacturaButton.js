import React from 'react'

export const NuevaFacturaButton = () => {
    const sendMessage = () => {

        alert('Crea una nueva factura');
     
    }
     
    return (
     
        <button onClick={sendMessage}>
           Nueva
        </button>
     
       ); 
}
