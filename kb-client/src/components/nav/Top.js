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
             <i className="icons devicon-github-original-wordmark"></i>
            <i className="icons devicon-linkedin-plain-wordmark"></i>
            <img src="procreate-icon.png" style={{height: "12vw"}}></img>
            <p className="icons">@</p>
        </section>
    )
}
