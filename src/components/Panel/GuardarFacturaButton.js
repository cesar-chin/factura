import React from 'react'

export const GuardarFacturaButton = () => {
    
    const sendMessage = () => {

        alert('Crea un archivo XML con los datos de la factura');
     
    }
     
    return (
     
        <button onClick={sendMessage}>
           Guardar
        </button>
     
       );
}
