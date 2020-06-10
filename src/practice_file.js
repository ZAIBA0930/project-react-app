import React from 'react'

function My_practice(props){
    return(
      <div>
          <h1>Today we are serving {props.dishName}</h1>
          <h1>Today we are serving {props.sweetDish}</h1>
      </div>    
    );
}

export default My_practice;