function createTodoList(items){
	
	if(!items.length){return;}
	
	var scrollView = Ti.UI.createScrollView({
		top:'120px',
		layout:'vertical',
		backgroundColor:'#D2D190'
	}),
	tasks = [];

	for (var i = 0; i < items.length; i++){
		tasks.push({
			id:items[i].id,
			todo:items[i].todo,
			doTill:items[i].doTill
		});
	}
	
	// var tasks = [
	    // {id: 'trash', name: 'Take Out the Trash', icon: 'trash.png'},
	    // {id: 'dishes', name: 'Do the Dishes', icon: 'dishes.png'},
	    // {id: 'doggie', name: 'Walk the Dog', icon: 'doggie.png'}
	// ];
	

	for (var i = 0; i < tasks.length; i++) {
		var todoLeastTime = {
			hours : (new Date(tasks[i].doTill)).getHours() - app.timeNow.getHours(),
			minutes : (new Date(tasks[i].doTill)).getMinutes() - app.timeNow.getMinutes(),
		},
		shortNoticeColor,
		shortNoticeImage;
		alert(app.timeNow.getHours() + ' app');
		alert((new Date(tasks[i].doTill)).getHours() + ' db');
		if(todoLeastTime.hours == 0 && todoLeastTime.minutes < 30){
			shortNoticeColor = '#E57066';
			shortNoticeImage = 'img/alert1.png';
		}
		else if(todoLeastTime.hours == 1 && todoLeastTime.minutes < 30){
			shortNoticeColor = '#B3D526';
			shortNoticeImage = 'img/in_progress.png';
		}
		else if(todoLeastTime.hours >= 1 && todoLeastTime.minutes >= 30){
			shortNoticeColor = '#529006';
			shortNoticeImage = 'img/in_progress.png';
		}
		else{
			shortNoticeColor = '#9C002D';
			shortNoticeImage = 'img/fail.png';
		}
		
		var newTodo = Ti.UI.createView({
				width:'90%', 	// accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
				height:'50px',
				layout:'horizontal',
				backgroundColor:shortNoticeColor,
				borderColor:'#880000',
				borderWidth:'1px',
				borderRadius:'10px',
				index: i
			}),
			todoIcon = Ti.UI.createImageView({
				image:shortNoticeImage,
				height:'45px'
			}),
			todoText = Ti.UI.createLabel({
				width:'70%',
	            index: i,
	            text: tasks[i].todo,
	            // image: tasks[i].icon,
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	            color: 'white',
	            height: 'auto'
	            // height:'40px'
				
			}),
			todoTime = Ti.UI.createLabel({
				width:'20%',
	            
	            // title: tasks[i].doTill.getHours() + ':' + tasks[i].doTill.getMinutes(),
	            text: (new Date(tasks[i].doTill)).getHours() + ':' + (new Date(tasks[i].doTill)).getMinutes(),
	            // image: tasks[i].icon,
				textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	            color: 'white'
	            // height:'40px'
				
			});
			newTodo.add(todoIcon);
			newTodo.add(todoText);
			newTodo.add(todoTime);
			// var opened = false;
			newTodo.addEventListener('click', function(event){
				if(this.opened){
					this.setHeight('45px');
				}
				else{
					this.setHeight('150px');
				}
				this.opened = !this.opened;
			});
			scrollView.add(newTodo);
	    // data.push(
	    	// testView
	        // { properties: {
	            // index: i,
	            // title: tasks[i].todo,
	            // // image: tasks[i].icon,
	            // accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
	            // color: 'white',
	            // height:'40px'
	        // }
	    // }
	    // );
	}
	
	// var section = Ti.UI.createListSection({
// 		
	// });
	// section.setItems(data);
	// listView.sections = [section];
	// listView.clear = function(){
		// var elementsToClear = listView.getChildren(); 
		// elementsToClear[0].deleteItemsAt(0, elementsToClear[0].items.length);
// 		
	// };
	return scrollView;
}

module.exports = createTodoList;