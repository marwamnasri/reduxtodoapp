import React, { Component } from 'react';
import {connect} from 'react-redux'
class Input extends Component {

  render() { 
    return (  
      <div className="bloc">
        <div className="titre"><h1>Daily Todo Lists</h1></div>
        <div className="in"><input type="text" placeholder="Add your to do" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <button onClick={()=>{this.props.add(this.props.input)}}>+</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
  add:(input)=>{
    let obj={}
    let inputValue=input
    let id=Math.floor(Math.random()*1000)
    let Complete= false
    let cls=true
    obj={inputValue,id, Complete, cls}
    dispatch ({type:'ADD_INPUT',value:obj})
  }
}
}
const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps) (Input);