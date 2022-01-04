import React from "react";
import FormularioConsulta from "./FormularioConsulta";

function Facturas({ onChange, onSubmit, campos }) {
  const handleSubmit = event => {
    onSubmit(event, () => {
      console.log(campos);
      alert('consulta las facturas ')
    });
  };

  return (
    <form>
      <div>
        <label>
          Número de factura <input type="text" value={campos.numero} name="numero" onChange={onChange}
          />
        </label>
        <label>
          Fecha
          <input type="date" value={campos.valor} name="fecha" onChange={onChange} />
        </label>
        <button onClick={handleSubmit}>Consulta factura</button>
      </div>      
    </form>
  );
}

export default FormularioConsulta({ numero: "", valor: 0 })(Facturas);
