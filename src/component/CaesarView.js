import React from "react";
import {encrypt,decrypt} from "../Caesar"

export default class Caesarview extends React.Component{
    constructor(props){
        super(props);
        this.state={
            plain: "",
            cipher: "",
            focusedOn: "",
            key: 7
        }
    }
    handleInput = (e)=> {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
    }
    onfocus = (name)=>{
        return (e)=>{
            e.preventDefault();
            this.setState({
                focusedOn: name,
                cipher: encrypt(this.state.plain,this.state.key),
                plain: decrypt(this.state.cipher,this.state.key)
            })
        }
    }
    render(){
        const fromPlain = encrypt(this.state.plain,this.state.key);
        const fromCipher = decrypt(this.state.cipher,this.state.key);
        console.log()
        return(
            <div className="caesar">
                <label>Key</label>
                <input type="text" value={this.state.key}/>
                <label>PlainText</label>
                <textarea value={this.state.focusedOn==="plain"?this.state.plain:fromCipher} onChange={this.handleInput} name="plain" onFocus={this.onfocus("plain")} />
                <label>Ciphertext</label>
                <textarea value={this.state.focusedOn==="plain"?fromPlain: this.state.cipher} onChange={this.handleInput} name="cipher" onFocus={this.onfocus("cipher")}/>

            </div>
        );
    }
}