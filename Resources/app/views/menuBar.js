function createMenuBar(){
	var bar = Ti.UI.createButton({
			top:'60px',			
			idth : '95%',
			height : '50px',
			backgroundColor : '#008800',
			title : 'New ToDo',
			borderRadius : '10px'
		});
	
	bar.addEventListener('click', function(event){
		app.showNewTodo();
	});
	
	return bar;
}

module.exports = createMenuBar;
