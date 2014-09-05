function createOptions(){
	var options = [],
		date = new Date(),
		hoursCur = date.getHours() + 1,
		halfHour = false,
		times = [];
	
	while(hoursCur < 24){
		times.push({
			hours : hoursCur,
			minutes : halfHour ? 30 : '00'
		});
		if(halfHour){
			hoursCur++;	
		}
		halfHour = !halfHour;
		
	}
	
	for(var i = 0; i < times.length; i++){
		options.push(
			Ti.UI.createPickerRow({
				title : 'Do till ' + times[i].hours + ':' + times[i].minutes,
				height:'40px',
				color : '#333333',
				hours:times[i].hours,
				minutes:times[i].minutes
			})
		);
	}
	
	return options;
}

function createNewTodoComponent(){
	var newTodo = Ti.UI.createView({
		top : '150px',
		left : '101%',
		width : '100%',
		height : '300px',
		backgroundColor:'#EFF1E4',
		borderRadius : '10px',
		// height : '90px',
		layout : 'vertical'
	}),
	todoInput = Ti.UI.createTextField({
		width:'90%',
		top:'10px',
		backgroundColor : '#1B54D0',
		hintText:'Type Your Todo',
		borderColor:'#1B54D0',
		borderRadius:'10px',
		borderWidth:'1px',
	}),
	tillDo = Ti.UI.createPicker({
		top:'10px',
		width:'60%',
		// backgroundColor : '#1B54D0',
		borderColor:'#1B54D0',
		borderWidth:'1px'

	}),
	createTodo = Ti.UI.createButton({
		top : '10px',
		width:'60%',
		title:'Add',
		backgroundColor : '#1B54D0',
		backgroundSelectedColor : '#3B54D0',
		borderColor:'#1B54D0',
		borderWidth:'1px'

	});
	
	tillDo.add(createOptions());
	newTodo.add(todoInput);
	newTodo.add(tillDo);
	newTodo.add(createTodo);
	
	createTodo.addEventListener('click', function(event){
		var animation = Titanium.UI.createAnimation();
		// animation.backgroundColor = 'black';
		animation.duration = 500;
		animation.left = '101%';
		this.parent.animate(animation);
		app.addTodo({
			todo : todoInput.value,
			doTill : tillDo.getSelectedRow(null).getTitle().split(' ')[2],
			done : false
		});
		todoInput.value = '';
	});
	
	return newTodo;
}
module.exports = createNewTodoComponent;