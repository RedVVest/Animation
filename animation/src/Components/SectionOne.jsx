import React, { useState } from 'react';
import './style.css'

function SectionOne() {
    const [isFancyHovered, setIsFancyHovered] = useState(false);

    const handleFancyHover = () => {
        setIsFancyHovered(true);
    }

    const handleFancyLeave = () => {
        setIsFancyHovered(false);
    }

    const word = {
        opacity: isFancyHovered? '.2' : '',
        transition: 'opacity 250ms ease'
    }

    const text = '# westsoftware'
    const letters = text.split('')

    return (
        <div className="sectionOne">
            <div
                className="box"
            >
                <div className="line">
                    <p style={word}>West</p>
                    <p style={word}>Software</p>
                </div>
                <div className="line">
                    <p style={word}>develop</p>
                    <p style={word}>&</p>
                </div>
                <div className="line">
                    <p style={word}>Personalization</p>
                </div>
                <div className="line fancy"
                     onMouseEnter={handleFancyHover}
                     onMouseLeave={handleFancyLeave}>
                    {letters.map((item, index)=> (
                        <p
                            className="letter"

                        >{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionOne;
