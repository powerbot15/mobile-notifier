var MainWin = require('../views/coreWindow'),
	dbUtils = require('../dbWorks/dbUtils'),
	todoModel = require('../models/todoItem'); 

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
	console.log(this.dbUtils.getAllTodos());
	// this.models = [todoModel()];
	// this.models[0].setItem({
		// text : 'testTodo',
		// done : false
	// });
	// console.log(this.models[0].getItem());
};

module.exports = Notifier;
