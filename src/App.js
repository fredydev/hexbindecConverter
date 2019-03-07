import React, { Component } from 'react';
import './App.css';
import Hex from './component/Hex';
import Dec from './component/Dec';
import Bin from './component/Bin';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      binInput: "",
      hexInput: "",
      decInput: "",
      bintodec: "",
      bintohex: "",
      hextodec:"",
      hextobin: "",
      dectohex:"",
      dectobin: "",
      touched: {
        binInput:false,
        hexInput: false,
        decInput: false

      },
      selected: ""
    }
  }
  /* je veux modifier l'input quand c'est un caracter non admis*/
  cuttingLetter = (text,name)=>{
      if(name==="hexInput"){
        if(/[g-zG-Z\W]/.test(text)){
          if(text.length===1)return text.slice(1)
          if(text.length>1){
            return text.slice(0,text.length-1)
          }
        }
      }
      if(name==="decInput"){
        if(/[a-zA-Z\W]/.test(text)){
          if(text.length===1)return text.slice(1)
          if(text.length>1){
            return text.slice(0,text.length-1)
          }
        }
      } 
      if(name==="binInput"){
        if(/[a-zA-Z2-9\W]/.test(text)){
          if(text.length===1)return text.slice(1)
          if(text.length>1){
            return text.slice(0,text.length-1)
          }
        }
      }  
    return text;
  }
  
  handleInput=(e)=>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let nv = ""
    if(name==="hexInput"){
       nv = this.cuttingLetter(value,name);
       this.setState({hexInput: nv})
    }
    else if(name==="decInput"){
      nv = this.cuttingLetter(value,name);
      this.setState({decInput: nv})
    }
    else {
      nv = this.cuttingLetter(value,name);
      this.setState({binInput: nv})
    }
  }
  viderInput=(e)=>{
    const target = e.target;
    const name = target.name;
    this.setState({
      [name] : ""
    })
  }
  /*  trouver un moyen pour vider les autres input quand l'un est actif  */ 
  onBlur=(champs)=>(e)=>this.setState({touched:{...this.state.touched,[champs]:false}})
  onFocus = (champs)=>(e)=>this.setState({touched:{...this.state.touched,[champs]:true},selected: champs,})
  exposant = (nombre,exp)=>{
    let resultat=1;
	  for(var i=0;i<exp;i++){
	  	resultat*=nombre;
    }
    return resultat;
  }
  setFrom = (name,value)=>{
        this.setState({[name]: value})
  }
  binToDec = (bin)=>{
    // bin = Number(bin);
     let tempTab = bin.split("").reverse()
     let resultat=0;
     for(var i=0;i<tempTab.length;i++){
       if(Number(tempTab[i])===1){
         resultat=resultat+this.exposant(2,i);
       }
     }
     
     return resultat;
   }
  decToBin = (dec)=>{
    dec = Number(dec);
   let rest = []
   while(dec>=2){
     rest=[...rest,dec%2];
     dec=Math.trunc(dec/2);
   }
   if(dec<2){
     rest=[...rest,dec]
   }
   return rest.reverse().join("");
 }

  decToHex=(dec)=>{
    dec=Number(dec)
    let rest = [];
    let hexTab=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    while(dec>=16){
      let modulo=dec%16
      for(var i=0;i<hexTab.length;i++){
        if(modulo===i){
          rest=[...rest,hexTab[modulo]]
        }
      }
      dec=Math.trunc(dec/16);
    }
    if(dec<16){
      for( i=0;i<hexTab.length;i++){
        if(dec===i){
          rest=[...rest,hexTab[i]]
        }
      }
    }
    //this.setState({dectohex: rest.reverse().join("")})
    return rest.reverse().join("")
  }
  hexToDec = (hex)=>{
    
    let tempTab=hex.toUpperCase().split("").reverse()

    let result=[];
    let hexTab=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    if(tempTab.length===1){
      for(var i =0; i<hexTab.length;i++){
        if(Number(tempTab[0])===Number(hexTab[i])){
          return i;
        }
      } 
    }
    tempTab.forEach((element,index) => {
      for(var i =0; i<hexTab.length;i++){
        if(Number(element)===hexTab[i]){
          result=[...result,i*this.exposant(16,index)]
        }
      }
    });
    return result.length!==0 ? result.reduce((a,b)=>(a+b)):""

  }
  hexToBin = (hex)=>{
    let dec = this.hexToDec(hex);
    return this.decToBin(dec).length!==0 ?this.decToBin(dec):""
  }
  binToHex = (bin)=>{
    let dec = this.binToDec(bin);
    return this.decToHex(dec);
  }
  handleSelected=()=>{

  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h2 className="app-name">Converter</h2>
            <Hex hexInput={this.state.hexInput} 
                setFrom={this.setFrom}
                caracterFilter={this.cuttingLetter}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                touched={this.state.touched}
                hexToBin={this.hexToBin}
                hexToDec={this.hexToDec}
                dectohex={this.state.dectohex}
                bintohex={this.state.bintohex}/>
            
            
            <Dec decInput={this.state.decInput}
                setFrom={this.setFrom}
                caracterFilter={this.cuttingLetter}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                bintodec={this.state.bintodec}
                hextodec={this.state.hextodec}
                touched={this.state.touched}
                decToBin={this.decToBin}
                decToHex={this.decToHex}/>


            <Bin binInput={this.state.binInput} 
                setFrom={this.setFrom}
                caracterFilter={this.cuttingLetter}
                binToHex={this.binToHex}
                binToDec={this.binToDec}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                dectobin={this.state.dectobin}
                hextobin={this.state.hextobin}
                touched={this.state.touched}/>
        </div>
          
      </div>
    );
  }
}

export default App;
