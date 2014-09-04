function CreateTodoItemModel(){
	var todoItem = {
		text : '',
		id : '',
		done : false,
		setItem : function(todoObject){
			this.text = todoObject.text;
			this.done = todoObject.done;
			this.saveToDatabase();
		},
		setItemDone : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('UPDATE todos SET done=? WHERE id=?',this.done, this.id);
			this.id = db.lastInsertRowID;
			db.close();
		},
		getItem : function(){
			return {
				text : this.text,
				id : this.id,
				done : this.done
			};
		},
		saveToDatabase : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('INSERT INTO todos (text,done) VALUES (?,?);', this.text, this.done);
			this.id = db.lastInsertRowID;
			console.log(db.lastInsertRowID);
			db.close();
		}
	};
	return todoItem;
}

module.exports = CreateTodoItemModel;
