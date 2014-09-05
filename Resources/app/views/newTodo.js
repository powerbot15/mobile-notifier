function createOptions(times){
	var options = [],
		date = new Date(),
		hoursNow = date.getHours();
		
	for(var i = 0; i < times.length; i++){
		options.push(
			Ti.UI.createPickerRow({
				title : i
			})
		);
	}
	
	return options;
}

function createNewTodoComponent(){
	var newTodo = Ti.UI.createView({
		top : '50px',
		width : '100%',
		height : '60px',
		layout : 'horizontal'
	}),
	todoInput = Ti.UI.createTextField({
		width:'60%'
	}),
	tillDo = Ti.UI.createPicker({
		width:'20%'
	}),
	createTodo = Ti.UI.createButton({
		width:'20%',
		title:'Add'
	});
	
	tillDo.add(createOptions());
	newTodo.add([todoInput, tillDo, createTodo]);
	
	return newTodo;
}
module.exports = createNewTodoComponent;