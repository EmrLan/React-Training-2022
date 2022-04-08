// ----------------------------------- API -----------------------------------

 const Api = (() => {

    const baseUrl = "http://localhost:3000";
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
        addTodo,
    };

    })();


// ----------------------------------- VIEW -----------------------------------

const View = (() => {
    const selector = {
        todoUl: "#todolist",
        completed: "#completedlist",
        inputbox: ".input-box",
        submit: ".submit",
    };

    const render = (element, template)=>{
        element.innerHTML  = template;
    };

    const createTemplateTodo = (arr) => {
        let template = "";

        arr.forEach(todo => {
            template += `
                <li>
                    <span>${todo.content}</span>
                    <div class="button-row">
                        <button class="editbtn" id="${todo.id}">
                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>                                 
                        </button>
                        <button class="deletebtn" id="${todo.id}">
                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                        </button>
                        <button class="arrowrightbtn" id="${todo.id}">
                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                        </button>
                    </div>
                </li>
            `;
        });
        return template;
    };

    const createTemplateComplete = (arr) => {
        let template = "";

        arr.forEach(todo => {
            template += `
                <li>
                    <button class="arrowleftbtn" id="${todo.id}">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                    </button>
                    <span>${todo.content}</span>
                    <div class="button-row">
                        <button class="editbtn" id="${todo.id}">
                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>                                 
                        </button>
                        <button class="deletebtn" id="${todo.id}">
                            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                        </button>
                    </div>
                </li>
            `;
        });
        return template;
    };

    return {
        selector,
        render,
        createTemplateComplete,
        createTemplateTodo,
    };
})();


// ----------------------------------- MODEL -----------------------------------

const Model = ((Api, View) => {
    let count = 0
    class Todo {
        constructor(content, status) {
            this.content = content;
            this.isCompleted = status;
            this.id = count;
            count++;
        }
    }

    class Todos {
        #todolist = [];
        #notCompleted = [];
        #Completed = [];
        #lastId = 0

        get todolist() {
            return this.#todolist;
        }

        get lastId(){
            return this.#lastId;
        }

        set todolist(Todo)
        {
            this.#todolist = [...Todo];

            //console.log(this.#todolist)
            for(let i = 0; i < this.#todolist.length; i++ )
            {
                if(Todo[i].isCompleted)
                {
                    //console.log(Todo[i])
                    this.#Completed.push(Todo[i]);
                }
                else{
                    this.#notCompleted.push(Todo[i]);
                }
            }
            count = (this.#todolist[this.#todolist.length - 1]).id + 1;
            //console.log(this.#lastId);

            const container = document.querySelector(View.selector.todoUl);
            const templ = View.createTemplateTodo(this.#notCompleted);
            View.render(container, templ);

            const compContainer = document.querySelector(View.selector.completed);
            const compTempl = View.createTemplateComplete(this.#Completed);
            View.render(compContainer, compTempl);
        }
        
        todolistWithId(inputId)
        {
           
            for(let i in  this.#todolist)
            {
                if( (this.#todolist[i])["id"] === Number(inputId))
                {
                    return (this.#todolist[i])["content"];
                }
                
            }
        }

    };

    const getTodos = Api.getTodos;
    const deleteTodo = Api.deleteTodo;
    const addTodo = Api.addTodo;

    return {
        Todos,
        Todo,
        getTodos,
        deleteTodo,
        addTodo,
        };
})(Api, View);


// ----------------------------------- CONTROLLER -----------------------------------

const Controller = ((Model, View) => {

    const state = new Model.Todos();

    const addTodo = () => {
        const submit = document.querySelector(View.selector.submit);

        submit.addEventListener("click", (event) => {
            if(event.target.previousElementSibling.value !== "")
            {
                const newtodo = new Model.Todo(event.target.previousElementSibling.value, false);
                Model.addTodo(newtodo).then((todo) => {
                    location.reload();
                });
                event.target.previousElementSibling.value = "";
            }
            //console.log(event.target.previousElementSibling.value);
            if (event.key === "Enter") {
                
                // Model.addTodo(newtodo).then((todo) => {
                //     state.todolist = [todo, ...state.todolist];
                // });
                event.target.value = "";
            }
        });
    };

    const deleteTodo = () => {
        const container = document.querySelector(View.selector.todoUl);

        container.addEventListener("click", (event) => {
            if(event.explicitOriginalTarget.className === "deletebtn")
                Model.deleteTodo(event.target.id).then(() => location.reload());
        });

        const completedContainer = document.querySelector(View.selector.completed);

        completedContainer.addEventListener("click", (event) => {

            if(event.explicitOriginalTarget.className === "deletebtn")
                Model.deleteTodo(event.target.id).then(() => location.reload());
        });        
    };

    //Handle arrow movements
    const move = () => {
        const container = document.querySelector(View.selector.todoUl);

        container.addEventListener("click", (event) => {
            if(event.explicitOriginalTarget.className === "arrowrightbtn")
            {
                const content = state.todolistWithId(event.target.id);
                const newtodo = new Model.Todo(content, true);
                
                Model.deleteTodo(event.target.id).then(() => {
                    Model.addTodo(newtodo).then((todo) => {
                        location.reload();
                    });
                });
            }
        });

        const completedContainer = document.querySelector(View.selector.completed);

        completedContainer.addEventListener("click", (event) => {
            if(event.explicitOriginalTarget.className === "arrowleftbtn")
            {
                const content = state.todolistWithId(event.target.id);
                const newtodo = new Model.Todo(content, false);
                
                Model.deleteTodo(event.target.id).then(() => {
                    Model.addTodo(newtodo).then((todo) => {
                        location.reload();
                    });
                });
            }
        });
    }

    //handles update
    // const edit = () => {
    //     const container = document.querySelector(View.selector.todoUl);

    //     container.addEventListener("click", (event) => {
    //         if(event.explicitOriginalTarget.className === "arrowrightbtn")
    //         {
    //             const content = state.todolistWithId(event.target.id);
    //             const newtodo = new Model.Todo(content, true);
                
    //             // Model.deleteTodo(event.target.id).then(() => {
    //             //     Model.addTodo(newtodo).then((todo) => {
    //             //         location.reload();
    //             //     });
    //             // });
    //         }
    //     });

    //     const completedContainer = document.querySelector(View.selector.completed);

    //     completedContainer.addEventListener("click", (event) => {
    //         if(event.explicitOriginalTarget.className === "arrowleftbtn")
    //         {
    //             const content = state.todolistWithId(event.target.id);
    //             const newtodo = new Model.Todo(content, false);
                
    //             // Model.deleteTodo(event.target.id).then(() => {
    //             //     Model.addTodo(newtodo).then((todo) => {
    //             //         location.reload();
    //             //     });
    //             // });
    //         }
    //     });
    // }

    const init = () => {
        Model.getTodos().then((todos) => {
            state.todolist = todos;
        });
    };


    const run = () => {
        init();
        deleteTodo();
        addTodo();
        move();
    }

    return {
        run,
    };
})(Model,View);

Controller.run();