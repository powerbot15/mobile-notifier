var MainWin = require('../views/coreWindow'),
	dbUtils = require('../dbWorks/dbUtils'),
	todoModel = require('../models/todoModel'),
	createNewTodo = require('../views/newTodo'); 

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
	this.dbUtils.clearTable('todos');
	console.log(this.dbUtils.getAllTodos());
	this.models = [todoModel({
		todo : 'testTodo',
		done : false
	})];
	this.models[0].setItem({
		todo : 'testTodo',
		done : false
	});
	console.log(this.models[0].getItem());
	
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
	var newTodo = todoModel(toDo);
	this.models.push(newTodo);
	newTodo.saveToDatabase();
	this.sortTodos();
	console.log(this.models);
	// this.renderTodos()
};

Notifier.prototype.sortTodos = function(){

	this.models.sort(function(a,b){
		if(a.hours >= b.hours && a.minutes > b.minutes){
			return 1;
		}
		else{
			return -1;
		}
		return 0;
	});
	
};
module.exports = Notifier;
