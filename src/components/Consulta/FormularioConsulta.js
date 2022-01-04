import React from "react";

export default function FormularioConsulta(campos) {
  return WrappedForm => {
    return class extends React.Component {
      state = { ...campos };
      handleInputChange = event => {
        const target = event.target;
        const valor = target.valor;
        const numero = target.numero;

        this.setState({
          [numero]: valor
        });
      };

      handleSubmit = (event, onSubmit) => {
        event.preventDefault();
        // do any default validations and other stuff
        onSubmit();
      };

      render() {
        return (
          <WrappedForm
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            campos={{ ...this.state }}
            {...this.props}
          />
        );
      }
    };
  };
}
