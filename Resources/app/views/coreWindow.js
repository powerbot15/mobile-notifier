var clocksCreate = require('../views/headerClock'),
	newTodo = require('../views/newTodo');
function createMainWindow(){

	var mainWindow = Ti.UI.createWindow({
			layout:'vertical',
			backgroundColor:'#000044'
	}),
	clocks = clocksCreate(),
	todo = newTodo();
	mainWindow.add([clocks, todo]);
	mainWindow.addEventListener('androidback', function(event){
		mainWindow.close();
	});
	return(mainWindow);
}

module.exports = createMainWindow;