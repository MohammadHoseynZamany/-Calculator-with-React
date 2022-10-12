import React from "react"
import ReactDOM from "react-dom/client"
import {Compute, PushOpration, PushNumber, Del} from "./Oprations"
import "../styles/Buttons.css"

export default function Buttons(){
    return (
        <div className="buttons-container">
            <div className="number-oprations-container">
                <div className="numbers-container">
                    <button id="number-seven" onClick={function(){PushNumber(7)}}>7</button>
                    <button id="number-eight" onClick={function(){PushNumber(8)}}>8</button>
                    <button id="number-nine" onClick={function(){PushNumber(9)}}>9</button>
                    <button id="number-four" onClick={function(){PushNumber(4)}}>4</button>
                    <button id="number-five" onClick={function(){PushNumber(5)}}>5</button>
                    <button id="number-six" onClick={function(){PushNumber(6)}}>6</button>
                    <button id="number-one" onClick={function(){PushNumber(1)}}>1</button>
                    <button id="number-two" onClick={function(){PushNumber(2)}}>2</button>
                    <button id="number-three" onClick={function(){PushNumber(3)}}>3</button>
                    <button id="number-zero" onClick={function(){PushNumber(0)}}>0</button>
                    <button id="point">.</button>
                    <button id="del" onClick={function(){Del()}}>&#8592;</button>
                </div>
                <div className="oprations-container">
                    <button id="division" onClick={function(){PushOpration('/')}}>&#247;</button>
                    <button id="multiplicaton" onClick={function(){PushOpration('*')}}>&#215;</button>
                    <button id="minus" onClick={function(){PushOpration('-')}}>&#8722;</button>
                    <button id="plus" onClick={function(){PushOpration('+')}}>&#43;</button>
                </div>
            </div>
                <div className="equal-container">
                    <button id="equal" onClick={function(){Compute()}}>&#61;</button>
                </div>
        </div>
    )
}