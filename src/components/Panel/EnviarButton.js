import React from 'react'

export const EnviarButton = () => {
    const sendMessage = () => {

        alert('Envía una factura al servicio de facturación');
     
    }
     
    return (
     
        <button onClick={sendMessage}>
           Envía
        </button>
     
       );
}
