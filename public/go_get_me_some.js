window.onload = function(){
	var img = document.getElementsByTagName('img')[0];
	
	if (img.naturalHeight + img.naturalWidth == 0)
		img.src = thumbnail;
}
