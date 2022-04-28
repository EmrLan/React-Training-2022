import React from "react";

class Item extends React.Component{
    render(){
        return(
            <li>
                <span>
                    {this.props.todo.title !== undefined ? this.props.todo.title : this.props.todo.content}
                </span>
                <button onClick={this.props.deleteFun} id={this.props.todo.id}>X</button>
            </li>
        );
    }
}

export default Item;