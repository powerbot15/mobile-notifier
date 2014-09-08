function createTodoList(items){
	
	if(!items.length){return;}
	
	var listView = Ti.UI.createListView(),
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
	
	var data = [];
	for (var i = 0; i < tasks.length; i++) {
	    data.push(
	        { properties: {
	            itemId: tasks[i].id,
	            title: tasks[i].todo,
	            // image: tasks[i].icon,
	            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
	            color: 'black'
	        }
	    });
	}
	
	var section = Ti.UI.createListSection();
	section.setItems(data);
	listView.sections = [section];
	listView.clear = function(){
		var elementsToClear = listView.getChildren(); 
		elementsToClear[0].deleteItemsAt(0, elementsToClear[0].items.length);
		
	};
	return listView;
}

module.exports = createTodoList;