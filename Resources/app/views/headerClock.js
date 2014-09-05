function convertTimeToString(time){
	var timeString = '', hours, min, sec;
	
	hours = time.getHours();
	if(hours <10){
		hours = '0' + hours;
	}
	min = time.getMinutes();
	if(min <10){
		min = '0' + min;
	}
	sec = time.getSeconds();
	if(sec < 10){
		sec = '0' + sec;
	}
	timeString = hours + ' : ' + min + ' : ' + sec;
	
	return timeString;
}

function createHeaderClock(){
	var headerClock, clocks, time;
	
	time = new Date();
	headerClock = Ti.UI.createView({
		width : '100%',
		top : 0,
		height : '50px'
	});
	clocks = Ti.UI.createLabel({
		text : convertTimeToString(time)
	});
	headerClock.add(clocks);
	setInterval(function(){
		var curTime = new Date();
		clocks.setText(convertTimeToString(curTime));
	}, 1000);
	return headerClock;
}

module.exports = createHeaderClock;
