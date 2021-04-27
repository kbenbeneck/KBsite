import React from 'react'

export default function Right() {
    const rightStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 15vw)",
        gridTemplateRows: "repeat(3, 15vw)",
        gridColumn: "3",
        gridRow: "2",
        
        transform: "rotate(-30deg) skewX(-30deg)  scaleY(0.864) translate(-65%, -22%)"
    }
    return (
        <section style={rightStyle}>
            Right
        </section>
    )
}
