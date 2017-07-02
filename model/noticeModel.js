module.exports = function (moneo, mongoose) {
	var Schema = mongoose.Schema;

	var NoticeSchema = new Schema({
		title: {type: String,
			nodeProperty: true,
			default: ''},
		caption: {type: String,
			nodeProperty: true,
			default: ''},
		image: {type: String,
			nodeProperty: true,
			default: ''},
	    data: { type: Date,
				nodeProperty: true,
				default: Date.now },
	    active: { type: Boolean,
				nodeProperty: true,
				default: true}
	});
	NoticeSchema.plugin(moneo);

	var noticemodel = mongoose.model('Notice', NoticeSchema);
	noticemodel.cypherQuery({query: 'match (n) return n'}, function (err, res) {
				console.log("Result of notice model "+res.length);
		});
	return noticemodel;
}
