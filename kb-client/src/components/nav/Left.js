import React from 'react'

export default function Left() {
    const leftStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 15vw)",
        gridTemplateRows: "repeat(3, 15vw)",
        gridColumn: "1",
        gridRow: "2",
        
        transform: "rotate(30deg) skewX(30deg)   scaleY(0.864) translate(30%, -22%)"
    }
    return (
        <section style={leftStyle}>
            Left
        </section>
    )
}
