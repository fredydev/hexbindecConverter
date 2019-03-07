import React from "react";

export default class Bin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            binInput: ""
        }
    }
    handleInput=(e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let nv = "";
        nv = this.props.caracterFilter(value,name);
        this.setState({binInput: nv})
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.binInput!==this.state.binInput){
            this.props.setFrom("bintodec",this.props.binToDec(this.state.binInput));
            this.props.setFrom("bintohex",this.props.binToHex(this.state.binInput))
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.touched.hexInput){
            this.setState({binInput: nextProps.hextobin})
        }
        if(nextProps.touched.decInput){
            this.setState({binInput: nextProps.dectobin})
        }
    }
   

    render(){
    return(
        <div>
        <h3>Binary</h3>
        <input  name="binInput" type="text" value={this.state.binInput} onChange={this.handleInput} onBlur={this.props.onBlur("binInput")} onFocus={this.props.onFocus("binInput")}/>
        </div>
    );
    }
    
}