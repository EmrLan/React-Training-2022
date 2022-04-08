// ----------------------------------- API -----------------------------------
 const Api = (() => {

    const baseUrl = "https://jsonplaceholder.typicode.com";
    const path = "todos";

    const getTodos = () => {
        return fetch( [baseUrl, path].join("/")).then( (response) => response.json());
    };

    return {
        getTodos,
    };

    })();
// ----------------------------------- VIEW -----------------------------------
const View = (() => {
    const selector = {
        letterSelect: "#letter",
        nameSelect: "#name",
        todoUl: "#todolist",
    };

    const render = (element, template)=>{
        element.innerHTML  = template;
    };

    const createSelectTemplate = (arr) => {
        let template = "";

        arr.forEach(input => {
            template += `
                <option value="${input}"> ${input} </option>
            `;
        });
        return template;
    };

    const createTemplate = (arr) => {
        let template = "";

        arr.forEach(todo => {
            template += `
                <li>
                    <span>${todo.title}</span>
                    <button class="deletebtn" id="${todo.id}">X</button>
                </li>
            `;
        });
        return template;
    };

    return {
        selector,
        render,
        createSelectTemplate,
        createTemplate,
    };
})();
// ----------------------------------- MODEL -----------------------------------
const Model = ((Api, View) => {
    class Data {
        #data = {
            a: "apple",
            b: "banana",
            c: "clementine",
            d: "dragonfruit",
            e: "elderberry",
            f: "fig"
        };

        get letters() {
            var arr = [];
            for( var i in this.#data)
            {
                arr.push(i);
            }
            return arr;
        };

        get name() {
            var arr = [];
            for( var i in this.#data)
            {
                arr.push(this.#data[i]);
            }
            return arr;
        };
    };

    class Todos {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }

        set todolist(newTodo)
        {
            this.#todolist = [...newTodo];

            const container = document.querySelector(View.selector.todoUl);
            const templ = View.createTemplate(this.#todolist);
            View.render(container, templ);
        }
    };

    const getTodos = Api.getTodos;

    return {
        Data,
        Todos,
        getTodos,
        };
})(Api, View);
// ----------------------------------- CONTROLLER -----------------------------------
const Controller = ((Model, View) => {

    const data = new Model.Data();
    const state = new Model.Todos();

    const selectionListener = () => {
        const letterCon = document.querySelector(View.selector.letterSelect);
        const nameCon = document.querySelector(View.selector.nameSelect);

        letterCon.addEventListener("change", (event) => {
            //console.log(event);
            //console.log(nameCon);
             nameCon.selectedIndex = event.target.selectedIndex;
        });

        nameCon.addEventListener("change", (event) => {
            //console.log(event);
            //console.log(nameCon);
             letterCon.selectedIndex = event.target.selectedIndex;
        });
    }

    const init = () => {
        const letterCon = document.querySelector(View.selector.letterSelect);
        const letterTempl = View.createSelectTemplate(data.letters);
        View.render(letterCon, letterTempl);

        const nameCon = document.querySelector(View.selector.nameSelect);
        const nameTempl = View.createSelectTemplate(data.name);
        View.render(nameCon, nameTempl);

        Model.getTodos().then((todos) => {
             state.todolist = todos
         });
    };


    const run = () => {
        init();
        selectionListener();
    }

    return {
        run,
    };
})(Model,View);

Controller.run();