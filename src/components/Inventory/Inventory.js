import React from 'react'
import data from '../../data.json'
import { InventoryItem } from '../InventoryItem/InventoryItem'

export const Inventory = () => {

    return (
        <ul>
            {
                // arreglo.map(( item ) => <li key={item} >{`Item${item}`}</li>)
                // data.map((item) => <li key={item.id} >{`${item.id}. ${item.name}`}</li> )
                //data.map((item) => <InventoryItem key={item.id} id={item.id} name={item.name} /> )
                data.map(({id, name}) => <InventoryItem key={id} id={id} name={name} /> )
            }
        </ul>
    )
}
