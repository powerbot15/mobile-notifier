function CreateTodoItemModel(){
	var todoItem = {
		todo : '',
		id : '',
		done : false,
		setItem : function(todoObject){
			this.todo = todoObject.todo;
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
				id : this.id,
				done : this.done
			};
		},
		saveToDatabase : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('INSERT INTO todos (todo,done) VALUES (?,?);', this.todo, this.done);
			this.id = db.lastInsertRowId;
			db.close();
		}
	};
	return todoItem;
}

module.exports = CreateTodoItemModel;
