import React from 'react'
import data from '../../data.json'
import { Linea } from '../Linea/Linea'

export const Detalle = () => {

    return (
        <ul>
            {
                  data.map(({codigo, descripcion, cantidad, precio, total}) => <Linea key={codigo} codigo={codigo} descripcion={descripcion} cantidad={cantidad} precio={precio} total ={total} /> )                
            }
        </ul>
    )
}
