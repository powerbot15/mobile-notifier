function createDbUtils(){
	var dbMixIn = {
		getAllTodos : function(){
			var db = Ti.Database.open('ToDoList'),
				todos = db.execute('SELECT * FROM todos'),
				todosParsed = [];
			while (todos.isValidRow()){
				todosParsed.push({
					id : todos.fieldByName('id'),
					text : todos.fieldByName('text'),
					done : todos.fieldByName('done'),
				});
		        todos.next();
			}
			todos.close();
			db.close();
			return todosParsed;
		},
		createDb : function(){
			var db = Ti.Database.open('ToDoList');
			db.execute('CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT, done BOOLEAN);');
			db.close();
		},
		clearTable : function(tableName){
			var db = Ti.Database.open('ToDoList');
			db.execute('DELETE FROM ' + tableName);
			db.close();
		}
		
	};
	return dbMixIn;
}

module.exports = createDbUtils;
