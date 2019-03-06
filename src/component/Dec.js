import React from "react";

export default function Dec(props){
    return(
        <>
        <h3>Dec</h3>
        {props.selected==="dec"?<input name="decInput" type="text" value={props.decInput} onChange={props.handleInput} onBlur={props.onBlur("decInput")} onFocus={props.onFocus("decInput")}/>
        :<div onClick={props.handleField}>
            <div id="dec" className="viewer">{props.touched.hexInput?props.hextodec:props.touched.binInput?props.bintodec:null}</div>
        </div>}
            {/*props.selected==="hex"?<div className="hex">
                <input name="hex" type="text" value={props.hexInput} onChange={props.handleInput} />
    </div>:<div   onClick={props.handleField}><div>Hexa</div><div id="hex" className="viewer"></div></div>*/}
        </>
    );
}