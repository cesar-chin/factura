import React from 'react'

export const VerFacturaButton = () => {
    const sendMessage = () => {

        alert('Muestra una factura existente');
     
    }
     
    return (
     
        <button onClick={sendMessage}>
           Ver factura
        </button>
     
       ); 
}
