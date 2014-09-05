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
	// console.log((new Date('18/30')).getHours());
	
	this.models = [todoModel({
		todo : 'testTodo',
		doTill : '14:50',
		done : false
	})];
	console.log(this.dbUtils.getAllTodos());
	console.log(this.models.splice(0, 1));

	
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
	var times;
	for(var i = 0; i < this.models.length; i++){
		times = this.models[i].doTill.split(':');
		this.models[i].hours = times[0];
		this.models[i].minutes = times[1][0];
	}
	console.log(this.models);
	this.models.sort(function(a,b){
		if(a.hours <= b.hours && a.minutes < b.minutes){
			return 1;
		}
		else{
			return -1;
		}
		return 0;
	});
	
};
module.exports = Notifier;
