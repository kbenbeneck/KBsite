import React from 'react'
import Left from './Left'
import Right from './Right'
import Top from './Top'

export default function IsometricNav() {
    let navGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 33vw)",
        gridTemplateRows: "repeat(3, 33vw)",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }
    return (
        <nav style={navGrid}>
            <Top></Top>
            <Left></Left>
            <Right></Right>
        </nav>
    )
}
