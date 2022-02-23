import React from "react";
class Clock extends React.Component{
    render(){
        return(
            <div>
                 {this.props.Date.toLocaleTimeString()}
            </div>
        ); 
    }
}

export default Clock;