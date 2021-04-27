import React from 'react'


export default function Top() {
    const topStyle = {
        gridColumn: "2",
        gridRow: "1",
        display: "grid",
        gridTemplateColumns: "repeat(3, 15vw)",
        gridTemplateRows: "repeat(3, 15vw)",
        
        transform: "rotate(30deg) skew(-30deg) scaleY(0.864)"
    }

    return (
        <section style={topStyle}>
            Top
        </section>
    )
}
