import React from "react"
import "../styles/Buttons.css"

export default function Buttons(){
    return (
        <div className="main-container">
            <div className="numbers-container">
                <div id="number-seven">7</div>
                <div id="number-eight">8</div>
                <div id="number-nine">9</div>
                <div id="number-four">4</div>
                <div id="number-five">5</div>
                <div id="number-six">6</div>
                <div id="number-one">1</div>
                <div id="number-two">2</div>
                <div id="number-three">3</div>
                <div id="number-zero">0</div>
                <div id="point">.</div>
            </div>
            <div className="oprations-container">
                <div id="division">&#247;</div>
                <div id="multiplicaton">&#215;</div>
                <div id="minus">&#8722;</div>
                <div id="plus">&#43;</div>
            </div>
            <div className="equal-del-container">
                <div id="equal">&#61;</div>
                <div id="del">&#8592;</div>
            </div>
        </div>
    )
}