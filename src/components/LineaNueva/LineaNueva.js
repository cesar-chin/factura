import React, { useState } from 'react'
import styles from './LineaNueva.module.css'

export const LineaNueva = () => {

    return ( 
        <>                             
            {   
                <tr>
                     <td>Código</td>
                     <td><input type="text" size={5} /></td>                     
                     <td>Descripción</td>
                     <td><input type="text" size={20} /></td>                     
                     <td>Cantidad</td>
                     <td><input type="text" size={4} /></td>       
                </tr>
            }        
        </>     
    )
}
 