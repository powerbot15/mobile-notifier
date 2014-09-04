function createMainWindow(){

	var mainWindow = Ti.UI.createWindow({
			layout:'vertical',
			backgroundColor:'#000044'
	});

	mainWindow.addEventListener('androidback', function(event){
		mainWindow.close();
	});
	return(mainWindow);
}

module.exports = createMainWindow;