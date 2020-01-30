var test = require('tape');
var logic = require('./logic');

test('Delete Test ', function (t) {
    let arr = [
        { id: 0, description: 'make tea', done: false },
        { id: 1, description: 'make eggs', done: true }
    ];
    let expected = [{ id: 0, description: 'make tea', done: false }];
    t.equal(logic.deleteTodo(), "undefind data", 'This is not array')
    t.equal(logic.deleteTodo("", 1), "It is not array", 'This is not array')
    t.equal(logic.deleteTodo([], ""), "Invalid input ID", 'It is not an integer')
    t.equal(logic.deleteTodo([], 1), "It is Empty", ' you are trying to delete empty array')
    t.deepEqual(logic.deleteTodo(arr, 2), "The task does not exist", "you are trying to delet not found task");
    t.end();
});

// Test generate id
test("Test generate id", x => {
    x.equal(logic.generateId(), 1, "The id is not unique");
    x.equal(logic.generateId(), 2, "The id is not unique");
    x.equal(logic.generateId(), 3, "The id is not unique");
    x.equal(logic.generateId(), 4, "The id is not unique");
    x.end();
});
//Test Of Add
test("Test Add ", t => {
    t.equal(logic.addTodo(), "the parameter can not be undefined");
    t.equal(logic.addTodo([], ""), "the newToDo must be object link { id: 5, description: description, done: false }", "the newToDo must be object link { id: 5, description: description, done: false }")
    t.equal(logic.addTodo("", { ere: 'dsf', }), "the toDO must be Array", "tthe toDO must be Array")


    t.end();
});
//Test of Complete
test('Complete Test ', function (t) {
    let arr = [
        { id: 0, description: 'make tea', done: false },
        { id: 1, description: 'make eggs', done: true }
    ];
    t.equal(logic.markTodo(), "undefind data", 'This is not array')
    t.equal(logic.markTodo("", 1), "It is not array", 'This is not array')
    t.equal(logic.markTodo([], ""), "Invalid input ID", 'It is not an integer')
    t.equal(logic.markTodo([], 1), "It is Empty", ' you are trying to delete empty array')
    t.equal(logic.markTodo(arr, 0), "The task does not exist", "you are trying to delet not found task");
    t.end();
});