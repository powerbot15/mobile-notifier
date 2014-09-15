var todoTime;
function createOptions(){
	var options = [],
		date = new Date(),
		hoursCur = date.getHours() + 1,
		halfHour = false,
		times = [],
		hours, minutes;
	// console.log(date.toDateString());
	while(hoursCur < 24){
		
		times.push({
			date : new Date(date.getFullYear(), date.getMonth(), date.getDate(), hoursCur, halfHour ? 30 : 0)
		});
		// {
			// hours : hoursCur,
			// minutes : halfHour ? 30 : '00'
		// });
		if(halfHour){
			hoursCur++;	
		}
		halfHour = !halfHour;
		
	}
	
	for(var i = 0; i < times.length; i++){
		hours = times[i].date.getHours();
		minutes = times[i].date.getMinutes();
		// console.log(hours + ' ' + minutes);
		options.push(
			Ti.UI.createPickerRow({
				title : 'Do till ' + hours < 10 ? '0' + hours : hours + ':' + minutes < 10 ? '0' + minutes : minutes,
				height:'40px',
				color : '#333333',
				doTill:times[i].date
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
		height : '350px',
		backgroundColor:'#EFF1E4',
		// backgroundColor:'green',
		borderRadius : '10px',
		// height : '90px',
		layout : 'vertical',
		zIndex:100
	}),
	todoInput = Ti.UI.createTextField({
		width:'90%',
		top:'10px',
		backgroundColor : '#1B54D0',
		hintText:'Type Your Todo Here',
		borderColor:'#1B54D0',
		borderRadius:'10px',
		borderWidth:'1px',
	}),
	tillDo = Ti.UI.createPicker({
		top:'10px',
		width:'60%',
		backgroundColor : '#3300AA',
		// borderColor:'#1B54D0',
		borderWidth:'1px',
		top:'50px',
		height:'50px',
		

	}),
	pickerContainer = Ti.UI.createView({
		width:'100%',
		height:'150px',
		backgroundColor:'#330099',
	}),
	picker = Ti.UI.createPicker({
	    type : Ti.UI.PICKER_TYPE_TIME,
	    selectionIndicator : true,
	    value : new Date(),
	    top:0,
	    bottom:0,
	    height:'150px'
	    // bottom : 0
	    
	}),
	
	createTodo = Ti.UI.createButton({
		top : '10px',
		width:'60%',
		height:'60px',
		title:'Add',
		backgroundColor : '#1B54D0',
		backgroundSelectedColor : '#3B54D0',
		borderColor:'#1B54D0',
		borderWidth:'1px'

	});
	picker.addEventListener('change', function(e) {
 
	    todoTime = e.value;
	    // Ti.API.info('Date: '+d.toString());
	    // Ti.API.info('Epoch: '+d.getTime());
	    Ti.API.info('Hours: ' +todoTime.getHours());
	    Ti.API.info('Minutes: '+todoTime.getMinutes());
 
	});
	console.log(picker.getChildren());
	// picker.getChildren().forEach(function(element, index){
		// console.log(element);
		// element.setBackgroundColor('#BBBBBB');	
		// element.setColor('#000000');
	// });
	// tillDo.add(createOptions());
	pickerContainer.add(picker);
	newTodo.add(todoInput);
	// newTodo.add(tillDo);
	newTodo.add(pickerContainer);
	newTodo.add(createTodo);
	
	createTodo.addEventListener('click', function(event){
		var animation = Titanium.UI.createAnimation();
		// animation.backgroundColor = 'black';
		animation.duration = 500;
		animation.left = '101%';
		
		this.parent.animate(animation);
		app.addTodo({
			todo : todoInput.value,
			doTill : todoTime.toDateString(),//tillDo.getSelectedRow(null).doTill,
			done : false
		});
		todoInput.value = '';
	});
	
	return newTodo;
}
module.exports = createNewTodoComponent;