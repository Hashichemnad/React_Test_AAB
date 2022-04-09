import React, { Component } from 'react';
// import './LoadMyFile.css';
import myText from './file.txt';

class Read extends Component {  

    constructor(props){
        super(props);
        this.state={
            currentline:0,
            filelength:0
        }
    }

    render() {
      return (
        <div>   
          <input type="number" onChange={(e)=>this.handleClick(e.target.value)}/>
          <button onClick={this.prev} disabled={this.state.currentline==0} className="LoadMyFile" name="button" variant="flat">Previous</button>
          <button onClick={this.next} disabled={this.state.currentline==this.state.filelength-1} className="LoadMyFile" name="button" variant="flat">Next</button>
          <div id="printhere"></div>
        </div>
      )
    }  
    handleClick = (line) => {
        this.setState({currentline:line-1})
        fetch(myText)
        .then((r) => r.text())
        .then(text  => {
            this.setState({filelength:text.split('\n').length})
          console.log(text.split('\n')[this.state.currentline]);
          document.getElementById('printhere').innerHTML=text.split('\n')[this.state.currentline];
        })  
    } 
    prev = () => {
        this.setState({currentline:this.state.currentline-1})
        fetch(myText)
        .then((r) => r.text())
        .then(text  => {
          console.log(text.split('\n')[this.state.currentline]);
          document.getElementById('printhere').innerHTML=text.split('\n')[this.state.currentline];
        })  
    }
    next = () => {
        this.setState({currentline:this.state.currentline+1})
        fetch(myText)
        .then((r) => r.text())
        .then(text  => {
          console.log(text.split('\n')[this.state.currentline]);
          document.getElementById('printhere').innerHTML=text.split('\n')[this.state.currentline];
        })  
    }   
}

export default Read;