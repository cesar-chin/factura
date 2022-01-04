

import React from 'react';

export default class Detalle extends React.Component {
  
  
  
  state = {
    filas: [], cant:0
  };

  handleChange = idx => e => {


    //alert ('al iniciar el total es ' + totall)
    
    const { 
      nombre, valor 
    } = e.target;
    
    const filas = [...this.state.filas];

    filas[idx] = {

      [nombre]: valor
    };

    
    this.setState({
      filas, 
    });

    if(e.target.name ==="cantidad" ){
       
      alert('Cantidad es '+ e.target.value)
     // alert (cant)
    }

    if(e.target.name ==="precio" ){
      
      alert ('Precio es ' + e.target.value ) 
    }

    //totall = cant * 10
    //alert ('al ingresar el total es ' + totall)

  };
  
  handleAddRow = () => {
    const item = {
      codigo: "",
      descripcion: "", 
      cantidad:0,
      precio:0,
      total: 0
    };
    this.setState({

      filas: [...this.state.filas, item]
    });
  };
  
  handleRemoveRow = () => {
    this.setState({
      filas: this.state.filas.slice(0, -1)
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Línea </th>
                    <th className="text-center"> Código </th>
                    <th className="text-center"> Descripción </th>
                    <th className="text-center"> Cantidad </th>
                    <th className="text-center"> Precio </th>
                    <th className="text-center"> Total </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filas.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="codigo"
                          value={this.state.filas[idx].codigo}
                          onChange={this.handleChange(idx)}
                        />
                      </td>
                      <td> 
                        <input
                          type="text"
                          name="descripcion"
                          value={this.state.filas[idx].descripcion}                          
                          onChange={this.handleChange(idx)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantidad"
                          value={this.state.filas[idx].cantidad}
                          onChange={this.handleChange(idx)}
                          
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="precio"
                          value={this.state.filas[idx].precio}
                          onChange={this.handleChange(idx)}
                          
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="total"
                          value={this.state.filas[idx].total}
                          onChange={this.handleChange(idx)}
                          
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Agrega línea
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="pull-right btn btn-default"
              >
                Elimina línea
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

