// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');



    var state = [
        // { id: -3, description: 'first todo' },
        // { id: -2, description: 'second todo' },
        // { id: -1, description: 'third todo' },
    ]; // this is our initial todoList



    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        // you will need to use addEventListener

        var task = todo.description;
        // add markTodo button
        var checkBoxNode = document.createElement('input');
        checkBoxNode.type = 'checkbox';
        checkBoxNode.addEventListener('change', function(event) {
            let newState = todoFunctions.markTodo(state, todo.id);
            update(newState);
        });

        if (todo.done == true) {
            checkBoxNode.checked = true;
            todoNode.classList.add("mark");
        }
        todoNode.appendChild(checkBoxNode);


        // var task = todo.description;
        //var textnode = document.createTextNode(task);
        var task = todo.description;
        var textnode = document.createElement('div'); //document.createTextNode(task);
        textnode.classList.add("todoList__taskDesc");
        textnode.innerHTML = task;
        todoNode.appendChild(textnode);



        // add span holding description

        // this adds the delete button
        var btnDiv = document.createElement('div');
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.innerText = "X"
        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        btnDiv.appendChild(deleteButtonNode)
        todoNode.appendChild(btnDiv);
        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            // https://developer.mozilla.org/en-US/docs/Web/Events/submit
            // what does event.preventDefault do?
            // what is inside event.target?
            event.preventDefault();
            var desc = event.target.elements["description"].value;
            if (desc.trim().length == 0) {
                alert("please add task description")
                event.target.elements["description"].value = "";
                return;
            }
            var taske = { id: 0, description: desc, done: false };
            var newState = todoFunctions.addTodo(state, taske);
            event.target.elements["description"].value = "";
            update(newState);
        });
    }
    // you should not need to change this function
    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    var renderState = function(state) {
        var todoListNode = document.createElement('ul');

        state.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();