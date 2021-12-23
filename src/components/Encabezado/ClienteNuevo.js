import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export const ClienteNuevo = () => (
  <div>
    <h3>Agregar nuevo cliente</h3>
    <Formik
      initialValues={{  
        codigo: '',
        identificaion:'',
        nombre: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="codigo">Código</label>
        <Field id="codigo" name="codigo" placeholder="" type = "number"/>

        <label htmlFor="identificacion">Identificación</label>
        <Field id="identificacion" name="identificacion" placeholder="9-0999-0999" />

        <label htmlFor="nombre">Nombre</label>
        <Field id="nombre" name="nombre" placeholder=""  />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="nombre@correo.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);