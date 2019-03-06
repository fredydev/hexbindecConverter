import React from "react";

export default function Hex(props){
    console.log(`donfred voicu ${props.touched.decInput}`)
    return(
        <>
        <h3>Hexdeci</h3>
        {props.selected==="hex"?<input name="hexInput" type="text" value={props.hexInput} onChange={props.handleInput} onBlur={props.onBlur("hexInput")} onFocus={props.onFocus("hexInput")} />
        :<div onClick={props.handleField}>
            <div id="hex" className="viewer">{props.touched.decInput?props.dectohex:props.touched.binInput?props.bintohex:null}</div>
        </div>}
            {/*props.selected==="hex"?<div className="hex">
                <input name="hex" type="text" value={props.hexInput} onChange={props.handleInput} />
    </div>:<div   onClick={props.handleField}><div>Hexa</div><div id="hex" className="viewer"></div></div>*/}
        </>
    );
}