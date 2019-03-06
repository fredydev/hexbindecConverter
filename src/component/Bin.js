import React from "react";

export default function Bin(props){
    return(
        <div>
        <h3>Bin</h3>
        {props.selected==="bin"?<input name="binInput" type="text" value={props.binInput} onChange={props.handleInput} onBlur={props.onBlur("binInput")} onFocus={props.onFocus("binInput")}/>
        :<div onClick={props.handleField}>
            <div id="bin" className="viewer">{props.touched.decInput?props.dectobin:props.touched.hexInput?props.hextobin:null}</div>
        </div>}
            {/*props.selected==="hex"?<div className="hex">
                <input name="hex" type="text" value={props.hexInput} onChange={props.handleInput} />
    </div>:<div   onClick={props.handleField}><div>Hexa</div><div id="hex" className="viewer"></div></div>*/}
        </div>
    );
}