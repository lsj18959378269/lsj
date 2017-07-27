var host = {
	'QA' : require('./qa.js')
}
var ENV;

module.exports = function(env) {
	if (env) {
		ENV = host[env];
		return;
	}
	return ENV;
};