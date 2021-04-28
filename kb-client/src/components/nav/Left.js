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
           
            <i className="icons devicon-ruby-plain-wordmark"></i>
            <i className="icons devicon-rails-plain-wordmark"></i>
            <i className="icons devicon-react-original-wordmark"></i>
            <i className="icons devicon-redux-original"></i>
            <i className="icons devicon-javascript-plain"></i>
            <i className="icons devicon-css3-plain-wordmark"></i>
            <i className="icons devicon-html5-plain-wordmark"></i>
            <i className="icons devicon-npm-original-wordmark"></i>
            <i className="icons devicon-visualstudio-plain-wordmark"></i>

        </section>
    )
}
