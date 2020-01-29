var test = require('tape');
var logic = require('./logic');

test('Example test', function (t) {
    t.equal(1, 1, "the Test Run");
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