import React, {Component} from 'react'
import './News.scss'
import birch from './birch.jpg';  
import {connect} from 'react-redux' // connect- позволяет соединить News со store. работает как hoc  

class News extends Component{
    render(){
  
    return(  
   <div className="News">
   <p>   
      {this.props.textBirch}
   </p>

    <div className="divBirch1"> 
        <img src={birch} className="birch" alt="Береза"/>
    </div>  
    
   </div>   

)
    }
}


// Данные из state станут обычными параметрами для компонента (props)
function mapStateToProps(state){
    return{      
      textBirch: state.textBirch
    
    }
  }
  
  // После вызова функции туда кладем компонент News
  export default connect(mapStateToProps)(News);
