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


    return {
        getTodos,
        deleteTodo,
    };

    })();


// ----------------------------------- VIEW -----------------------------------

const View = (() => {
    const selector = {
        todoUl: "#todolist",
        completed: "#completedlist",
        delete: ".deletebtn",
        arrowleft: ".arrowleftbtn",
        arrowright: ".arrowrightbtn",
        edit: ".editButton"
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
                    <div class="button-row">
                        <button class="arrowleftbtn" id="${todo.id}">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon" aria-label="fontSize small"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                        </button>
                    </div>
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
    
    class Todos {
        #todolist = [];
        #Completed = [];

        get todolist() {
            return this.#todolist;
        }

        set todolist(Todo)
        {

            for(let i = 0; i < Todo.length; i++ )
            {
                if(Todo[i].isCompleted)
                {
                    //console.log(Todo[i])
                    this.#Completed.push(Todo[i]);
                }
                else{
                    this.#todolist.push(Todo[i]);
                }
            }

            const container = document.querySelector(View.selector.todoUl);
            const templ = View.createTemplateTodo(this.#todolist);
            View.render(container, templ);

            const compContainer = document.querySelector(View.selector.completed);
            const compTempl = View.createTemplateComplete(this.#Completed);
            View.render(compContainer, compTempl);
        }

        initTodo()
        {
            this.#todolist = [];
        }

    };

    const getTodos = Api.getTodos;
    const deleteTodo = Api.deleteTodo;

    return {
        Todos,
        getTodos,
        deleteTodo,
        };
})(Api, View);


// ----------------------------------- CONTROLLER -----------------------------------

const Controller = ((Model, View) => {

    const state = new Model.Todos();

    const deleteTodo = () => {
        const container = document.querySelector(View.selector.todoUl);

        container.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (todo) => +todo.id !== +event.target.id
            );
            //Model.deleteTodo(event.target.id);
        });
        
    };

    const init = () => {
        Model.getTodos().then((todos) => {
            state.todolist = todos;
        });

    };


    const run = () => {
        init();
        deleteTodo();
    }

    return {
        run,
    };
})(Model,View);

Controller.run();