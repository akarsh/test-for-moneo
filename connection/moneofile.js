module.exports = function (moneo, mongoose) {
	var moneo = require("moneo")({url:'http://localhost:7474'});

	var User = require('./../model/userModel')(moneo, mongoose);
	var Noticia = require('./../model/noticiaModel')(moneo, mongoose);

	var _user = {
		username: 'aki',
		password: '123',
		nome: 'Akarsh Seggemu',
		place: 'Germany'
	};

	var _notice = {
		title: 'I was able to connect in moneo',
		caption: 'Yes, i am connected now',
		image: 'akidroid.jpg'
	};

	var User = new User(_user);
	var Noticia = new Noticia(_noticia);

	User.save(function (user) {
	});

	Notice.save(function (notice) {
		notice.cypherQuery({query: 'match (n) return n'}, function (err, res) {
				console.log(res.length);
		});
	});

}
