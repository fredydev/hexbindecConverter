import React from "react";

export default function Bin(props){
    let value =props.selected==="bin"?props.binInput:props.touched.decInput?props.dectobin:props.touched.hexInput?props.hextobin:null
    return(
        <div>
        <h3>Binary</h3>
        <input name="binInput" type="text" value={value} onChange={props.handleInput} onBlur={props.onBlur("binInput")} onFocus={props.onFocus("binInput")}/>
        </div>
    );
}