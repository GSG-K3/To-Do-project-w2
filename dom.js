// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
    var state = []; // this is our initial todoList
    var createTodoNode = function (todo) {
        let todoNode = document.createElement('li');
         let task = todo.description;
        let checkBoxNode = document.createElement('input');
        checkBoxNode.type = 'checkbox';
        checkBoxNode.setAttribute("name", `mark${todo.id}`);
        checkBoxNode.setAttribute("role", 'checkbox');
        checkBoxNode.setAttribute("aria-label", `mark ${todo.id}`);
        checkBoxNode.addEventListener('change', function (event) {
            let newState = todoFunctions.markTodo(state, todo.id);
            update(newState);
        });

        if (todo.done == true) {
            checkBoxNode.checked = true;
            todoNode.classList.add("mark");
        }
        todoNode.appendChild(checkBoxNode);
        let task = todo.description;
        let textnode = document.createElement('div'); 
        textnode.classList.add("todoList__taskDesc");
        textnode.innerHTML = task;
        todoNode.appendChild(textnode);
        let btnDiv = document.createElement('div');
        let deleteButtonNode = document.createElement('button');
        deleteButtonNode.setAttribute("name", `btn${todo.id}`);
        deleteButtonNode.setAttribute("role", 'button');
        deleteButtonNode.setAttribute("aria-label", `delete ${todo.id}`);
        deleteButtonNode.innerHTML = "<i class='fas fa-trash-alt'></i>"
    
        deleteButtonNode.addEventListener('click', function (event) {
            let newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        btnDiv.appendChild(deleteButtonNode)
        todoNode.appendChild(btnDiv);
        return todoNode;
    };
   
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function (event) {
         
            event.preventDefault();
            let desc = event.target.elements["description"].value;
            if (desc.trim().length == 0) {
                alert("please add task description")
                event.target.elements["description"].value = "";
                return;
            }
            let taske = { id: 0, description: desc, done: false };
            let newState = todoFunctions.addTodo(state, taske);
            event.target.elements["description"].value = "";
            update(newState);
        });
    }

    var update = function (newState) {
        state = newState;
        renderState(state);
    };

    var renderState = function (state) {
        var todoListNode = document.createElement('ul');
        state.forEach(function (todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });
        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();