import React, { Component } from 'react';
import {connect} from "react-redux";
class Main extends Component {

  render() { 
    return (  
      <div className="bloc2">
        {this.props.todo.map(el=><li className={!el.cls? "r1":"r2"}
         key={el.id}>
         <span className="title">{el.inputValue}</span>
         <button className="btn1" onClick={()=>{this.props.remove(el.id)}}><img src="https://findicons.com/files/icons/1580/devine_icons_part_2/256/trash_recyclebin_empty_closed_w.png"/></button>
         <button className="btn" onClick ={()=>{this.props.Change(el.id)}}>{!el.Complete? "Complete":"UNDO"}</button>
         </li>)}
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    todo:state.main
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(id)=>{
      dispatch ({type:'REMOVE_INPUT',id:id})
      
    },
    Change : (id)=>{dispatch ({type:"CHANGE", id : id})}

  }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Main);