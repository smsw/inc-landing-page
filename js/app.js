$(function(){

	var currentTime = new Date(),
		day = currentTime.getDate(),
		month = currentTime.getMonth() + 1,
		start = new Date(2014, month, day),	// Now
		end = new Date(2014, 12, 1),		// 19th Novemeber 2014
		dr = moment.range(start, end);

	$('.timer .number').html(dr.diff('days'));

});
