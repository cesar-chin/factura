import React, { useState } from 'react'
import styles from './InventoryItem.module.css'

// export const InventoryItem = (item) => {
export const InventoryItem = ({id, name}) => {

    const [checked, setChecked] = useState(false)

    const checkOnHandler = (e, id) =>
    {
        setChecked(e.target.checked);
    }

    return (
        <li>
            <span className={ checked ? styles.checked : undefined }>
                {`${id}. ${name}`}
            </span>
            <input type="checkbox" onChange={(e) => checkOnHandler(e, id) } />
        </li>
    )
}
