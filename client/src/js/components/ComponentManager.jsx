import React from 'react';
import NewsBox from './NewsBox'

export default class ComponentManager extends React.Component {
constructor(){
  super();
}
  render() {
    return(
      <div>
        {
          this.props.newsArrRef.map(function(item){
            return(<NewsBox item={item}/>)
            }
          )
        }
      </div>
    )
  }
}
