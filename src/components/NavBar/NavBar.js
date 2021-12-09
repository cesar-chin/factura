import React, { Component } from 'react'
import { CartButton } from '../CartButton/CartButton'
import './NavBar.module.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <CartButton />
            </nav>
        )
    }
}
