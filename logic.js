// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function () {
        var idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function (todos) {
        return todos.map(function (todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },

    addTodo: function (todos, newTodo) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // returns a new array, it should contain todos with the newTodo added to the end.
        // add an id to the newTodo. You can use the generateId function to create an id.
        // hint: array.concat


        if (todos === undefined || newTodo === undefined) return "the parameter can not be undefined";
        if (!Array.isArray(todos)) return "the toDO must be Array";
        if (typeof (newTodo) != 'object') return "the newToDo must be object link { id: 5, description: description, done: false }";

        newTodo.id = this.generateId();


        let arr = this.cloneArrayOfObjects(todos);
        arr.push(newTodo);
        return arr;

    },
    deleteTodo: function (todos, idToDelete) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // return a new array, this should not contain any todo with an id of idToDelete
        // hint: array.filter
        if (todos === undefined || idToDelete === undefined) return "undefind data";
        if (!(Array.isArray(todos))) return "It is not array";
        if (!(Number.isInteger(idToDelete))) return "Invalid input ID";

        if (todos.length === 0) return "It is Empty";


        const array = this.cloneArrayOfObjects(todos);

        const newArr = array.filter(
            function (item) {
                if (item.id != idToDelete) {
                    return true;
                }
            });
        console.log(newArr);

        // if two Array lenth is equal then the idToDelete not found in array
        if (newArr.length === array.length) {
            return "The task does not exist";
        }

        // return new Array after delete item
        return newArr;
    },
    markTodo: function (todos, idToMark) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // in the new todo array, all elements will remain unchanged except the one with id: idToMark
        // this element will have its done value toggled
        // hint: array.map
        if (todos === undefined || idToMark === undefined) return "undefind data";
        if (!(Array.isArray(todos))) return "It is not array";
        if (!(Number.isInteger(idToMark))) return "Invalid input ID";
        if (todos.length === 0) return "It is Empty";

        if(idToMark === 0) return "The task does not exist";
        let array = this.cloneArrayOfObjects(todos);

        array.forEach(element => {
            if (element.id === idToMark) {
                element.done = !(element.done);
            }

        });
        return array;
    },
    sortTodos: function (todos, sortFunction) {
        // stretch goal! Do this last
        // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
        // sortFunction will have same signature as the sort function in array.sort
        // hint: array.slice, array.sort
    },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}