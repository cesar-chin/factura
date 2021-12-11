import React from 'react'

export const Encabezado = () => {

    return (
        
        <>                
            <p>Identificación <input type = {Text} size={15} /> Correo <input type = {Text} size={25} /> Teléfono <input type = {Text} size={15}/> </p>
            <p>Dirección <input type = {Text} size={60} /></p> 
            <p>Provincia <input type = {Text} size={15} /> Cantón <input type = {Text} size={15} /> Distrito <input type = {Text} size={15} /></p>                     
        </>
    )
}
