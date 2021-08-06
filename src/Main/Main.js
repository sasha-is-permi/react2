import React, {Component} from 'react'
import './Main.scss'
import pine from './pine.jpg';  
import {connect} from 'react-redux' // connect- позволяет соединить Main со store. работает как hoc  



class Main extends Component{
  render(){

  return(  
    <div className="Main">
    <h2> {this.props.h2Tree} </h2>
    <p> 
     {this.props.textTree1}
   {<br/>}{<br/>}
     {this.props.textTree2}
   {<br/>} {<br/>}
     {this.props.textTree3} 
   {<br/>} {<br/>}
    {this.props.textTree4}
   {<br/>} {<br/>}
    {this.props.textTree5}
   {<br/>} {<br/>}
    {this.props.textTree6}
   {<br/>}  {<br/>}
    {this.props.textTree7}
     </p>
 
     <div className="divPine"> 
         <img src={pine} className="pine" alt="Хвойные деревья"/>
     </div>  
     
    </div>
  )
}
}




// Данные из state станут обычными параметрами для компонента (props)
function mapStateToProps(state){
  return{
    h2Tree:state.h2Tree,
    textTree1: state.textTree1,
    textTree2: state.textTree2,
    textTree3: state.textTree3,
    textTree4: state.textTree4,
    textTree5: state.textTree5,
    textTree6: state.textTree6,
    textTree7: state.textTree7
  }
}

// После вызова функции туда кладем компонент Main
export default connect(mapStateToProps)(Main);

