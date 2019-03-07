import React from "react";

export default class Dec extends React.Component{
    constructor(props){
        super(props);
        this.state={
            decInput: ""
        }
    }
    handleInput=(e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let nv = "";
        nv = this.props.caracterFilter(value,name);
        this.setState({decInput: nv})
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.decInput!==this.state.decInput){
            this.props.setFrom("dectobin",this.props.decToBin(this.state.decInput));
            this.props.setFrom("dectohex",this.props.decToHex(this.state.decInput))
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.touched.hexInput){
            this.setState({decInput: nextProps.hextodec})
        }
        else if(nextProps.touched.binInput){
            this.setState({decInput: nextProps.bintodec})
        }
    }
    render(){
    return(
        <div>
        <h3>Decimal</h3>
        <input  name="decInput" type="text" value={this.state.decInput} onChange={this.handleInput} onBlur={this.props.onBlur("decInput")} onFocus={this.props.onFocus("decInput")}/>
        </div>
    );
    }
    
}