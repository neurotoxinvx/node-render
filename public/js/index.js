/*
* @ author: Neurotoxin
* @ desc: A simple Demo of NodeJS render
* @ deps: Express Jade
*/

$('#main ul li').click(function(){
	var _src = $(this).find('img').attr('src'),
			_name = $(this).find('.player_box').attr('name'),
			_id = $(this).find('.player_box').attr('id');

	$('#detail_video, #black_blank').show();
	$('#big_player').html('<img width="522" height="522" src="' + _src + '">');
	$('.detail_information').html('<span>主播ID:'+ _id +'</span><span>主播名称:'+ _name +'</span>');
});

$('#black_blank').click(function(){
	$('#detail_video, #black_blank').hide();
});