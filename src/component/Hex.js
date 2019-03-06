import React from "react";

export default function Hex(props){
    //console.log(`donfred voicu ${props.touched.decInput}`)
    let value = props.selected==="hex"?props.hexInput:props.touched.decInput?props.dectohex:props.touched.binInput?props.bintohex:null
    return(
        <div>
        <h3>Hexadecimal</h3>
        <input name="hexInput" type="text" value={value} onChange={props.handleInput} onBlur={props.onBlur("hexInput")} onFocus={props.onFocus("hexInput")} />
        </div>
    );
}