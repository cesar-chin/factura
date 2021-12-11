import React from 'react'
import { VerFacturaButton } from './VerFacturaButton'
import { ConfigurarButton } from './ConfigurarButton'
import { NuevaFacturaButton } from './NuevaFacturaButton'
import { GuardarFacturaButton } from './GuardarFacturaButton'
import { EnviarButton } from './EnviarButton'

import './Panel.module.css'

export const Panel = () => {

    return (
        
        <nav>
                <NuevaFacturaButton/>
                <GuardarFacturaButton/>
                <EnviarButton />                                
                <ConfigurarButton />
                <VerFacturaButton />                
        </nav>        

    )
}
