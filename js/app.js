$(function(){

	var currentTime = new Date(),
		dayOfMonth = currentTime.getDate(),
		deadLine = 29
		daysToGo = deadLine - dayOfMonth;

	$('.timer .number').html(daysToGo);

});