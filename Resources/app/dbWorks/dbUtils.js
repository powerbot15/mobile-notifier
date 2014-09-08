function createDbUtils(){
	var dbMixIn = {
		getAllTodos : function(){
			var db = Ti.Database.open('ToDoList'),
				todos = db.execute('SELECT * FROM todos ORDER BY doTill ASC'),
				todosParsed = [];
			while (todos.isValidRow()){
				todosParsed.push({
					id : todos.fieldByName('id'),
					todo : todos.fieldByName('todo'),
					doTill : todos.fieldByName('doTill'),
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
			db.execute('DROP TABLE IF EXISTS todos');
			db.execute('CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT, doTill DATE, done BOOLEAN);');
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
