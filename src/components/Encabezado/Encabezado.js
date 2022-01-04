import React, { useState, useRef } from 'react';
import {useHookHttp} from './useHookHttp/useHookHttp';
import {useHookData} from './useHookData/useHookData';
import actualizarResultado from './Resultado/actions'
import { connect } from 'react-redux';

import { Formik, Field, Form } from 'formik';

export const Encabezado = () => {

    
    const [id, setId] = useState(1);    
    
    //const [cliente] = useHookHttp(`http://localhost:3002/${id}`);
    const [cliente] = useHookData(`${id}`);

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
                 <Formik
                initialValues={{  
                    id: '',
                    identificaion:'',
                    nombre: '',
                    correo: '',
                    telefono:''
                }}
                onSubmit={manejarBusqueda}
                >
                <Form>
                 <table>
                     <tr>
                         <td>
                             <input type = {Text} size={15} ref={resultadoRef} type="text" size="1" maxLength={1}
                             pattern="[1-5]*"/>
                             <button type="submit">Buscar por código</button>
                         </td>
                     </tr>

                     <tr>
                         <td>
                            <label htmlFor="codigo">Código</label>
                            <Field id="codigo" name="codigo" placeholder="" type = "number" value={cliente.id}/>
                         </td>                         
                     </tr>
                     <tr>
                         <td>
                         <label htmlFor="identificacion">Identificación</label>
                    <Field id="identificacion" name="identificacion" placeholder=""  value={cliente.identificacion}/>
                         </td>                         
                     </tr>

                     <tr>
                         <td>
                         <label htmlFor="nombre">Nombre</label>
                    <Field id="nombre" name="nombre" placeholder="" value={cliente.nombre}  />
                         </td>                         
                     </tr>

                     <tr>
                         <td>
                         <label htmlFor="telefono">Teléfono</label>
                    <Field id="telefono" name="telefono" placeholder="" value={cliente.telefono} />
                         </td>                         
                     </tr>
                     
                     <tr>
                         <td>
                         <label htmlFor="correo">Correo</label>
                    <Field  id="correo" name="correo"  type="email" value={cliente.correo} />
                         </td>                          
                     </tr>
                 </table>
                                    
                </Form>
                </Formik>             
        </div>

            

    )
}

export default connect(null, {actualizarResultado}) (Encabezado);



