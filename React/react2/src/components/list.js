import React from "react";
import Item from "./item";

class List extends React.Component{
    
    render(){
        return(
            <>
                <section className="section-header">
                    <h2>Todo List:</h2>
                </section>
                <ul>
                    {this.props.list.todolist.length > 0 ? 
                       this.props.list.todolist.map(todo => {
                           return <Item key={todo.id} todo={todo} deleteFun={this.props.deleteFun}/>
                       })
                    : 
                    <div></div>}
                </ul>
                
            </>
        );
    }
}

export default List;