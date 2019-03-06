import React from "react";

export default function Dec(props){
    let value = props.selected==="dec"?props.decInput:props.touched.hexInput?props.hextodec:props.touched.binInput?props.bintodec:null
    return(
        <div>
        <h3>Decimal</h3>
        <input name="decInput" type="text" value={value} onChange={props.handleInput} onBlur={props.onBlur("decInput")} onFocus={props.onFocus("decInput")}/>
        </div>
    );
}