import React, { useState } from 'react'

export const Linea = ({color, type}) => {
    
        return (

            <li>                            
                <span className={`${styles.li} `}>                                 
                    <p>{color}</p>                
                </span>                                                                  
            </li>
        )                    
}

// export const Linea = (item) => {
// export const Linea = ({codigo, descripcion, cantidad, precio, total}) => {

//      const [checked, setChecked] = useState(false)

//      const checkOnHandler = (e, id) =>
//      {
//          setChecked(e.target.checked);
//      }

//     return (
//         <li>            
//             { <span className={ checked ? styles.checked : undefined }>
//                 { `${codigo}. ${descripcion}. ${cantidad}. ${precio}. ${total} ` }
//             </span> }

//             { <input type="checkbox" onChange={(e) => checkOnHandler(e, codigo) } /> }
//         </li>
//     )
// }
 