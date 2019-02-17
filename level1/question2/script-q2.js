//Console.log out elements in JSON file
video = '[{"id": 12312412312,"name": "Ecuaciones Diferenciales","url": "/video/math/edo/12312412312","author": {"data": [{"name_author": "Alejandro Morales","url": "/author/alejandro-morales","type": "master"}]}}]';

(function() {
	var myvideo = JSON.parse(video);
	console.log(myvideo[0].id);
	console.log(myvideo[0].name);
	console.log(myvideo[0].url);
	console.log(myvideo[0].author);

	for (var i = 0; i < myvideo[0].author.data.length; i ++) {
		var obj = myvideo[0].author.data[i];
	}

	for (var key in obj) {
		var authorobj = obj[key];
		console.log(key + ": " + authorobj);
	}
})();
