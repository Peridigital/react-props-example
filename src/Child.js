import React, { Component } from 'react';

class Child extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
            {this.props.usersArray.map((elem)=>{
                return (
                    <h3>{elem}</h3>
                )
            })}
            </div>
        );
    }
}

export default Child;