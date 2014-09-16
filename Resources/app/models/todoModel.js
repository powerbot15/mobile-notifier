function CreateTodoItemModel(newTodo, isNewModel){
	var todoItem = {
		todo : newTodo.todo,
		id : newTodo.id ? newTodo.id : 0, 
		doTill:newTodo.doTill,
		done : newTodo.done,
		setItem : function(todoObject){
			this.todo = todoObject.todo;
			this.doTill = todoObject.doTill;
			this.done = todoObject.done;
			this.saveToDatabase();
		},
		setItemDone : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('UPDATE todos SET done=? WHERE id=?',this.done, this.id);
			this.id = db.lastInsertRowId;
			db.close();
		},
		getItem : function(){
			return {
				todo : this.todo,
				doTill : this.doTill,
				id : this.id,
				done : this.done
			};
		},
		saveToDatabase : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('INSERT INTO todos (todo, doTill, done) VALUES (?, ?, ?);', this.todo, new Date(this.doTill), this.done);
			this.id = db.lastInsertRowId;
			db.close();
		}
	};
	if(isNewModel){todoItem.saveToDatabase();}
	return todoItem;
}

module.exports = CreateTodoItemModel;
