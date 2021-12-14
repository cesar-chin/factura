import React from 'react'

export const ConfigurarButton = () => {
    const sendMessage = () => {

        alert('Configura valores de factura');
     
    }
     
    return (
     
        <button onClick={sendMessage}>
           Configurar
        </button>
     
       ); 
}
