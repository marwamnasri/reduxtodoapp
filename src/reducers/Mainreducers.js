const Mainreducers = (state=[],action)=>{
    if(action.type==='ADD_INPUT'){
      return state=[...state,action.value]
    }
    if(action.type==='REMOVE_INPUT'){
      return state.filter(el=>el.id!==action.id)
    }
    if(action.type==='CHANGE'){
      return   state.map(el=> el.id ===action.id ? {...el ,Complete:!el.Complete, cls:!el.cls}: el)
    }
    return state
  }
  export default Mainreducers;