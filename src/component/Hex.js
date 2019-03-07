import React from "react";

export default class Hex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hexInput: "",
            bintohex: "",
            dectohex: ""
        }
    }
    handleInput=(e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let nv = "";
        nv = this.props.caracterFilter(value,name);
        this.setState({hexInput: nv})
    }
    // Quand il recoit une valeur exterieure, il le garde comme sien
    setHexInput=(type)=>{
        if(type==="dec"){
            this.setState({hexInput: this.dectohex})
        }
        else{
            this.setState({hexInput: this.bintohex})
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.hexInput!==this.state.hexInput){
            this.props.setFrom("hextobin",this.props.hexToBin(this.state.hexInput));
            this.props.setFrom("hextodec",this.props.hexToDec(this.state.hexInput));
        }

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.touched.decInput){
            this.setState({hexInput: nextProps.dectohex})
        }
        else if(nextProps.touched.binInput){
            this.setState({hexInput: nextProps.bintohex})
        }
    }
    render(){

    return(
        <div>
        <h3>Hexadecimal</h3>
        <input  name="hexInput" type="text" value={this.state.hexInput} onChange={this.handleInput} onBlur={this.props.onBlur("hexInput")} onFocus={this.props.onFocus("hexInput")} />
        </div>
    );
    }
    
}