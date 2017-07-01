module.exports = function (moneo, mongoose) {
	var Schema = mongoose.Schema;

	var UserSchema = new Schema({
		username: {type: String,
			nodeProperty: true,
			default: ''},
		password: {type: String,
			nodeProperty: true,
			default: ''},
		nome: {type: String,
			nodeProperty: true,
			default: ''},
		place: {type: String,
			nodeProperty: true,
			default: ''},
	  dateregister: { type: Date,
			nodeProperty: true,
			default: Date.now },
	  active: { type: Boolean,
			nodeProperty: true,

			default: true}
	});
	UserSchema.plugin(moneo);

	return mongoose.model('User', UserSchema);
}
