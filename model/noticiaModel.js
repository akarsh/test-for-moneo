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

	return mongoose.model('Noticia', NoticeSchema);
}
