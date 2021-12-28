import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

const Configuracion = () => {

const params = useParams()
const [user, setUser] = useState({})

console.log(params.id)

const data1 = data.find((d) => d.id ==params.id);
console.log(data1)


return (
    <>
        <h4>Parámetro: {data1.name} </h4>
        <h4>Valor: {data1.descripcion} </h4>
    </>
  )
};

export default Configuracion
