var test = require('tape');
var logic = require('./logic');

test('Delete Test ', function (t) {
  let arr = [
    { id: 0, description: 'make tea', done: false },
    { id: 1, description: 'make eggs', done: true }];
  let expected = [{ id: 0, description: 'make tea', done: false }];
  t.equal(logic.deleteTodo(), "undefind data", 'This is not array')
  t.equal(logic.deleteTodo("", 1), "It is not array", 'This is not array')
  t.equal(logic.deleteTodo([], ""), "Invalid input ID", 'It is not an integer')
  t.equal(logic.deleteTodo([], 1), "It is Empty", ' you are trying to delete empty array')
  t.deepEqual(logic.deleteTodo(arr, 2), "The task does not exist", "you are trying to delet not found task");
  t.end();
});



 
