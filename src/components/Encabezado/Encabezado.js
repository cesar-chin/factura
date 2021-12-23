import React, { useState, useRef, useReducer } from 'react';
import {useHookHttp} from './useHookHttp/useHookHttp';
import actualizarResultado from './Resultado/actions'
import { connect } from 'react-redux';

export const Encabezado = ({actualizarResultado}) => {
    const [id, setId] = useState(0);    
    
    const [cliente] = useHookHttp(`http://localhost:3002/${id}`);

    const resultadoRef = useRef(null);

    const manejarBusqueda = () => {
                               
        setId(resultadoRef.current.value);          
    }

    const manejarAgregar = () => {
        //setId(id + 1)
        alert ('TODO: Agrega un cliente!')
    }

    return (
        <div>
            <table>

            <tr>
                  <td>
                  <button onClick={manejarBusqueda}>Buscar por código</button> 
                  <input type = {Text} size={15} ref={resultadoRef} />
                  {/* <button onClick={manejarAgregar}>Agregar</button> */}
                  </td>
                  </tr>  
                  
                 <tr>
                    <td>Código <input type = {Text} size={15} value={cliente.id}/></td>
                 </tr>
                 <tr>
                      <td>Identificación <input type = {Text} size={15} value={cliente.identificacion}/></td>
                 </tr>
                 <tr>
                  <td>Nombre <input type = {Text} size={25} value={cliente.nombre}/></td>
                 </tr>                
                  <tr>
                      <td>Teléfono <input type = {Text} size={15} value={cliente.telefono}/></td> 
                      </tr>
                 <tr>    
                      <td>Correo <input type = {Text} size={15} value={cliente.correo}/></td>
                  </tr> 
                                 
                 </table>                  
        </div>
    )
}

export default connect(null, {actualizarResultado}) (Encabezado);



