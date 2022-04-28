import React from "react";

class Form extends React.Component{

    render(){
        return(
            <>
                <div>
                    <input type="text" placeholder="Add to todo list"/>
                    <button>Add</button>
                </div>
            </>
        );
    }
}

export default Form;