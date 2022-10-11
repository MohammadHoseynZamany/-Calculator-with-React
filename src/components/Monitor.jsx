import React from "react"
import Oprations from "./Oprations"
import "../styles/Monitor.css"

export default function(){
    return(
    <div className="main-container">
        <p id="show-monitor">{Oprations.stack}</p>
    </div>
    )
}