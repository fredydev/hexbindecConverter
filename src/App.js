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
      touched: {
        binInput:false,
        hexInput: false,
        decInput: false

      },
      selected: ""
    }
  }
  /* je veux modifier l'input quand c'est un caracter non admis*/
  cuttingLetter = (text)=>{
    let nt
    if(text.length!==0){
      if(/[a-z]/.test(text)){
         let nt = text.slice(0,text.length-2)
      }
    }
    return null;
  }
  componentDidUpdate(){
    //console.log(`etat de touched : \n binInput==>${this.state.touched.binInput} \n hexInput==> ${this.state.touched.hexInput} \n decInput==> ${this.state.touched.decInput}`)
  }
  handleInput=(e)=>{
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    })
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
  onFocus = (champs)=>(e)=>this.setState({touched:{...this.state.touched,[champs]:true}})
  exposant = (nombre,exp)=>{
    let resultat=1;
	  for(var i=0;i<exp;i++){
	  	resultat*=nombre;
    }
    return resultat;
  }
  binToDec = (bin)=>{
   // bin = Number(bin);
    let tempTab = bin.split("").reverse()
    let resultat=0;
    for(var i=0;i<tempTab.length;i++){
      if(tempTab[i]==1){
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
    return rest.reverse().join("")
  }
  hexToDec = (hex)=>{
    
    let tempTab=hex.toUpperCase().split("").reverse()

    let result=[];
    let hexTab=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    if(tempTab.length===1){
      for(var i =0; i<hexTab.length;i++){
        if(tempTab[0]==hexTab[i]){
          return i;
        }
      } 
    }
    tempTab.forEach((element,index) => {
      for(var i =0; i<hexTab.length;i++){
        if(element==hexTab[i]){
          result=[...result,i*this.exposant(16,index)]
        }
      }
    });
    return result.length!==0 && result.reduce((a,b)=>(a+b))

  }
  hexToBin = (hex)=>{
    let dec = this.hexToDec(hex);
    return this.decToBin(dec)
  }
  binToHex = (bin)=>{
    let dec = this.binToDec(bin);
    return this.decToHex(dec);
  }
  handleField=(e)=>{
    this.setState({
      selected: e.target.id
    })
  }
  render() {
    console.log(this.cuttingLetter(this.state.binInput))
    let decInput = this.state.decInput;
    let hexInput = this.state.hexInput;
    let binInput = /[a-z]/g.test(this.state.binInput)?null : this.state.binInput;
    let dectobin = this.state.decInput.length!==0?this.decToBin(this.state.decInput):null;
    let dectohex = this.state.decInput.length!==0?this.decToHex(this.state.decInput):null;
    let bintodec = this.state.binInput.length!==0?this.binToDec(this.state.binInput):null;
    let bintohex = this.state.binInput.length!==0?this.binToHex(this.state.binInput):null;
    let hextobin = this.state.hexInput.length!==0?this.hexToBin(this.state.hexInput):null;
    let hextodec = this.state.hexInput.length!==0?this.hexToDec(this.state.hexInput):null;
    return (
      <div className="App">
        <dv className="wrapper">
          <h2 className="app-name">Converter</h2>
            <Hex hexInput={this.state.hexInput}
                handleInput={this.handleInput} 
                selected={this.state.selected}
                handleField={this.handleField}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                touched={this.state.touched}
                dectohex={dectohex}
                bintohex={bintohex}
                decInput={this.state.decInput}/>
            
            
            <Dec decInput={this.state.decInput}
                handleInput={this.handleInput}
                selected={this.state.selected} 
                handleField={this.handleField}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                bintodec={bintodec}
                hextodec={hextodec}
                touched={this.state.touched}
                vider={this.viderInput}/>


            <Bin binInput={binInput} 
                handleInput={this.handleInput} 
                selected={this.state.selected} 
                handleField={this.handleField}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                dectobin={dectobin}
                hextobin={hextobin}
                touched={this.state.touched}
                decInput={this.state.decInput}/>
        </dv>
          
      </div>
    );
  }
}

export default App;
