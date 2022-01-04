import React from 'react';

export default class Detalle extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        rowData: [],
        alert: null,
        Productos: [],
        Cantidad: "",
        Precio: [],
        id: 0,
  
      };
  
      this.handleRowDelete = this.handleRowDelete.bind(this);
      this.handleRowAdd = this.handleRowAdd.bind(this);      
      this.handleProdChange = this.handleProdChange.bind(this);
      this.handleCantidadChange = this.handleCantidadChange.bind(this);

      this.getTotal = this.getTotal.bind(this);
      this.getImpuesto = this.getImpuesto.bind(this);
      this.getTotalConImpuesto = this.getTotalConImpuesto.bind(this);      
    }
   
    componentDidMount() {

        
    }

    getTotal() {
        let total = 0;
        const rowTotals = this.state.rowData.map(row => (row.Cantidad * row.Precio) || 0);
        if (rowTotals.length > 0) {
          total = rowTotals.reduce((acc, val) => acc + val);
        }
        return total;
    }

    getImpuesto() {
      let impuesto = 0;
      const rowTotals = this.state.rowData.map(row => (row.Cantidad * row.Precio * 0.13) || 0);
      if (rowTotals.length > 0) {
        impuesto = rowTotals.reduce((acc, val) => acc + val);
      }
      return impuesto;
  }

    getTotalConImpuesto() {
      let totalConImpuesto = 0;
      const rowTotals = this.state.rowData.map(row => (row.Cantidad * row.Precio * 0.13) + (row.Cantidad * row.Precio) || 0);
      if (rowTotals.length > 0) {
        totalConImpuesto = rowTotals.reduce((acc, val) => acc + val);
      }
      return totalConImpuesto;
  }


    handleRowDelete(row) {
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy.splice(row, 1);

      this.setState({
        rowData: rowDataCopy
      });
    }


    handleRowAdd() {
      let id = this.state.id;
      id = id++;
      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy.push({
        Producto: "",
        Cantidad: 0,
        Precio: ""
      });

      this.setState({
        rowData: rowDataCopy,
        id: id
      });
    }
  
    handleCantidadChange(index, value) {

      const rowDataCopy = this.state.rowData.slice(0);
      rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {
        Cantidad: parseInt(value, 10)
  
      });

   
  
      this.setState({
        rowData: rowDataCopy
      });
    }


    handleProdChange(index, value) {
        const rowDataCopy = this.state.rowData.slice(0);
        rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {
            Producto: value
    
        });
  
        this.setState({
          rowData: rowDataCopy
        });
      }
  
      handlePrecioChange(index, value) {
        const rowDataCopy = this.state.rowData.slice(0);
        rowDataCopy[index] = Object.assign({}, rowDataCopy[index], {
          Precio: parseInt(value, 10)         
        });
  
     
        this.setState({
          rowData: rowDataCopy
        });
      }
    

  
    render() {
     

      return (<div>
  

          <table >
         
                    <tr>
                      <td>Producto</td>
                      <td>Cantidad</td>
                      <td>Precio</td>
                      <td></td>
                      <td></td>
                    </tr>
                
                    {
                      this.state.rowData.map((data, index) => (
                      <tr key={index} id={index}>
                        <td>
                          {" "}  
                          <input type="text" name="Producto" id="Producto" placeholder=""  value={data.Producto} 
                                 onChange={(e) => this.handleProdChange(index, e.target.value)} >
                          </input>
                      </td>
                      <td>
                        <input type="text"  value={data.Cantidad || 0} onChange={(e) => this.handleCantidadChange(index, e.target.value)}/></td>    
                      <td> 
                        <input type="text"  value={data.Precio || 0} onChange={(e) => this.handlePrecioChange(index, e.target.value)}/>
                      </td>
                      <td>
                       <button onClick={(e) => this.handleRowDelete(index)} >Eliminar línea</button>
                      </td>{" "}
                    </tr>
                  ))}
                    <tr>
              
              <td><button onClick={this.handleRowAdd}>Agregar línea</button></td>
            </tr>     
            <tr>               
              <td>Sub Total: {this.getTotal()} </td>
              <td>Impuesto: {this.getImpuesto()} </td>
              <td>Total: {this.getTotalConImpuesto()} </td>              
            </tr>  
          </table>    
          </div>);
    }
  
  
  }