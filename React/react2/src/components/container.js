import React from 'react';
import Form from './form';
import List from './list';
import '../stylesheets/containerStyle.css';
import uuid from 'react-uuid';

const Api = (() => {

  const baseUrl = "http://localhost:8000";
  const path = "todos";

  const getTodos = () => {
      return fetch( [baseUrl, path].join("/")).then( (response) => response.json());
  };

  const deleteTodo = (id) =>
    fetch([baseUrl, path, id].join("/"), {
      method: "DELETE",
  });

  const addTodo = (todo) =>
    fetch([baseUrl, path].join("/"), {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
            .then((response) => response.json());
  return {
      getTodos,
      deleteTodo,
  };

})();

class Todo {
  constructor(content) {
      this.content = content;
      this.isCompleted = false;
      this.id = uuid();
  }
}

class Container extends React.Component{

  state = {
    todolist: []
  };

  componentDidMount() {
    Api.getTodos().then((todos) => {
      //console.log(todos)
      this.setState((prev) => {
        const next = {...prev};
        next.todolist = [...prev.todolist]
        next.todolist = [...todos];
        return next;
      });
    });
  }

  deleteTodoFromList = (event) => {
    Api.deleteTodo(event.target.id)
    .then((respon)=>{
      this.setState(prev => {
        const next = {...prev};
        next.todolist = [...prev.todolist];
        next.todolist = next.todolist.filter((todo, index) => {
          return todo.id !== Number(event.target.id);
        });
        return next;
      })
    });
  }

  addTodoToList = (event) => {
    console.log(event);
  }


  render(){
    return (
      <div className='container'>
        <header>
          <Form addTodo={this.addTodoToList}/>
        </header>
        <main>
          <List list={this.state} deleteFun={this.deleteTodoFromList}/>
        </main>
      </div>

    )
  }

}

export default Container;
