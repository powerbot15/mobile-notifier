var MainWin = require('../views/coreWindow'),
	dbUtils = require('../dbWorks/dbUtils'),
	todoModel = require('../models/todoModel'),
	createNewTodo = require('../views/newTodoForm'),
	todoList = require('../views/todoList'); 

function Notifier(){
	this.name = 'Notification controller';
	this.init();
}
Notifier.prototype.init = function(){
	console.log('Notifier started');
	this.mainWin = MainWin();
	this.mainWin.open();
	this.dbUtils = dbUtils();
	this.dbUtils.createDb();
	// this.dbUtils.clearTable('todos');
	// console.log(this.dbUtils.getAllTodos());
	// console.log((new Date('18/30')).getHours());
	
	this.models = [todoModel({
		todo : 'testTodo',
		doTill : new Date(),
		done : false
	})];
	// console.log(this.dbUtils.getAllTodos());
	// console.log(this.models.splice(0, 1));

	
};
Notifier.prototype.showNewTodo = function(){
	if(!this.mainWin.newTodo){
		var newTodo = createNewTodo();
		this.mainWin.newTodo = newTodo;
		this.mainWin.add(newTodo);
	}
	
	var animation = Titanium.UI.createAnimation();
	animation.duration = 500;
	animation.left = '0px';
	
	this.mainWin.newTodo.animate(animation);
};

Notifier.prototype.addTodo = function(toDo){
	var newTodo = todoModel(toDo, true);
	// this.models.push(newTodo);
	// newTodo.saveToDatabase();
	this.getSortedTodos();
	this.renderTodos();
};
Notifier.prototype.renderTodos = function(){
	this.mainWin.remove(this.mainWin.getChildren().length - 1);
	this.mainWin.add(todoList(this.models));
	// for(var i = 0; i < this.models.length; i++){
// 		
	// }
};
Notifier.prototype.getSortedTodos = function(){
	var todos = [];
	todos = this.dbUtils.getAllTodos();
	console.log(todos);
	this.models = [];
	for (var i = 0; i < todos.length; i++){
		this.models.push(todoModel(todos[i], false));
	}
};
module.exports = Notifier;
