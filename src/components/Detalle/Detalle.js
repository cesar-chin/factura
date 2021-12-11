import React from 'react'
import data from '../../data.json'
import { Linea } from '../Linea/Linea'
import { LineaNueva } from '../LineaNueva/LineaNueva'
import { PanelDetalle } from '../PanelDetalle/PanelDetalle'

export const Detalle = () => {

    return (
        <>        
        <ul>             
            <PanelDetalle/>            
            <LineaNueva/>
            {
                  data.map(({codigo, descripcion, cantidad, precio, total}) => <Linea key={codigo} codigo={codigo} descripcion={descripcion} cantidad={cantidad} precio={precio} total ={total} /> )                
            }
        </ul>
       </>
    )
}
