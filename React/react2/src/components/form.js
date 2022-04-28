import React from "react";

class Form extends React.Component{

    render(){
        return(
            <>
                <div >
                    <input onChange={this.props.onChange} type="text" placeholder="Add to todo list"/>
                    <button onClick={this.props.addTodo}>Add</button>
                </div>
            </>
        );
    }
}

export default Form;