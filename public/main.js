var getJson = function() {
	$.getJSON("/getJson", function(data) {
		var innerHTMLbtns = '',
			innerHTMLpic = '';
		for(var i = 0; i < data.images.length; i++) {
			if(i == 0) {
				innerHTMLbtns += '<li data-target="#slideshow" data-slide-to="0" class="active"></li>';
				innerHTMLpic += '<div class="item active">';

			} else {
				innerHTMLbtns += '<li data-target="#slideshow" data-slide-to="' + i + '"></li>';
				innerHTMLpic += '<div class="item">';
			}

			innerHTMLpic += '<img class="displayed" src="' + data.images[i].src + '" alt="City"><div class="carousel-caption"><h3>' + data.images[i].descr + '</h3>';
			innerHTMLpic += '<p>' + data.images[i].width + 'x' + data.images[i].height + 'px</p></div></div>';
		}
		$('#slidebtns').html(innerHTMLbtns);
		$('#slidepics').html(innerHTMLpic);
	});
}
