var clocksCreate = require('../views/headerClock'),
	
	navBar = require('../views/menuBar');
function createMainWindow(){

	var mainWindow = Ti.UI.createWindow({
			// layout:'vertical',
			backgroundColor:'#000044'
	}),
	clocks = clocksCreate(),
	navbar = navBar();
	// todo = newTodo();
	mainWindow.add(clocks);
	mainWindow.add(navbar);
	// mainWindow.add(todo);
	mainWindow.addEventListener('androidback', function(event){
		mainWindow.close();
	});
	return(mainWindow);
}

module.exports = createMainWindow;