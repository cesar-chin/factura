import React from 'react'
import { VerFacturaButton } from '../VerFacturaButton/VerFacturaButton'
import { ConfigurarButton } from '../ConfigurarButton/ConfigurarButton'
import { NuevaFacturaButton } from '../NuevaFacturaButton/NuevaFacturaButton'
import { GuardarFacturaButton } from '../GuardadFacturaButton/GuardarFacturaButton'
import { EnviarButton } from '../EnviarButton/EnviarButton'

export const Panel = () => {

    return (
        
        <nav>
                <EnviarButton/>
                <GuardarFacturaButton/>
                <NuevaFacturaButton/>
                <ConfigurarButton />
                <VerFacturaButton />                
        </nav>        

    )
}
