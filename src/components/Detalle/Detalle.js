import React from 'react';

export default class Detalle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateValues(event) {
    this.setState({
      message: event.target.value
    });
    alert(event.target.value)
  }

  handleClick() { 
    var items = this.state.items;
    items.push(this.state.message);
    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;
    this.setState({ 
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;
    items.splice(i, 1);
    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;
    return  this.state.items.map(function(o, i) {
        return (
            <tr key={"item-" + i}>
                  <td> <input type="text" value={o}/></td>
                  <td><input type="text" value={o}/></td>
                  <td><input type="text" value={o}/></td>
                  <td> <input type="text" value={o}/></td>
                  <td><input type="text" value={o} /></td>
                  <td>
                    <button  onClick={context.handleItemDeleted.bind(context, i)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            });
  }


  render() {
    return (
      <div>
         
        <table className="">
          <thead>
            <tr>
              <td>Código</td>
              <td>Descripción</td>
              <td>Cantidad</td>
              <td>Precio</td>
              <td>Total</td>
              <td></td>
            </tr>
            <tr>
             <td> <input type="text" value={this.state.message} onChange={this.updateValues.bind(this)} /> </td>
        <td> <input type="text" value={this.state.message} onChange={this.updateValues.bind(this)} /> </td>
        <td>  <input type="text" value={this.state.message} onChange={this.updateValues.bind(this)} /> </td>
        <td><input type="text" value={this.state.message} onChange={this.updateValues.bind(this)} /></td>
        <td><input type="text" value={this.state.message}  /></td>
        <td>
            <button onClick={this.handleClick.bind(this)} >            
                Agrega línea
            </button>
        </td>
        </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        
      </div>
    );
  }
}