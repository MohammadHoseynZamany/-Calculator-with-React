import React from "react"
import ReactDOM from "react-dom/client"
import Oprations from "./Oprations"
import "../styles/Buttons.css"

export default function Buttons(){
    return (
        <div className="buttons-container">
            <div className="number-oprations-container">
                <div className="numbers-container">
                    <button id="number-seven" onClick={Oprations.pushNumber(7)}>7</button>
                    <button id="number-eight" onClick={Oprations.pushNumber(8)}>8</button>
                    <button id="number-nine" onClick={Oprations.pushNumber(9)}>9</button>
                    <button id="number-four" onClick={Oprations.pushNumber(4)}>4</button>
                    <button id="number-five" onClick={Oprations.pushNumber(5)}>5</button>
                    <button id="number-six" onClick={Oprations.pushNumber(6)}>6</button>
                    <button id="number-one" onClick={Oprations.pushNumber(1)}>1</button>
                    <button id="number-two" onClick={Oprations.pushNumber(2)}>2</button>
                    <button id="number-three" onClick={Oprations.pushNumber(3)}>3</button>
                    <button id="number-zero" onClick={Oprations.pushNumber(0)}>0</button>
                    <button id="point">.</button>
                    <button id="del">&#8592;</button>
                </div>
                <div className="oprations-container">
                    <button id="division">&#247;</button>
                    <button id="multiplicaton">&#215;</button>
                    <button id="minus">&#8722;</button>
                    <button id="plus">&#43;</button>
                </div>
            </div>
                <div className="equal-container">
                    <button id="equal">&#61;</button>
                </div>
        </div>
    )
}