import React from 'react'
import { AgregarLineaButton } from './AgregarLineaButton'
import { EliminarLineaButton } from './EliminarLineaButton'

import './PanelDetalle.module.css'

export const PanelDetalle = () => {

    return (
                
        <nav>                
                <AgregarLineaButton />
                <EliminarLineaButton/>              
        </nav>        

    )
}
