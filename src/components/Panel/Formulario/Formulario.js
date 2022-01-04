import React, {useRef} from 'react';
import actualizarResultado from '../../../redux/store/Resultado/action'
import { connect } from 'react-redux';

const Formulario = ({actualizarResultado}) => {  
       const resultadoRef = useRef(null);
       
       
       const onButtonClick = () => {
         
          alert ('Ejecuta la acción ' + resultadoRef.current.value) 

          actualizarResultado(resultadoRef.current.value);

         
       }


        return (
          <div>               
            {/* <input type="text" ref={resultadoRef} /> */}
            <select name="ejecutar_accion" id="ejectutar_accion" ref={resultadoRef}>
              <option value="Nueva">Nueva</option>
              <option value="Guardar">Guardar</option>
              <option value="Enviar">Enviar</option>              
            </select>
            <button onClick={onButtonClick}>Ejecutar acción</button>
          </div>
        );

  }
  
// Se conecta con Redux: null = indica si desea recuperar algo de la "store"
export default connect(null, {actualizarResultado}) (Formulario);

