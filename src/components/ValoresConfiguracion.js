import react from "react";
import data from '../data.json'
import { Link } from 'react-router-dom'

const ValoresConfiguracion = () => {
return (

   
   
    <div className="cuerpo">

    <ul>
            {
                       
                data.map(({id, name}) => <li key={id} ><Link to={`configuracion/${id}`}>{`${name}`}</Link></li> )
            }
        </ul>
      </div>                 

);


} 
export default ValoresConfiguracion;