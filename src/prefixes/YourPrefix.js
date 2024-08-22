const { Movies } = require('./collections/Movies')

class Prefix {
	constructor({ graphUrl, graphServer }) {
		this.name = 'training';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
		this.movies = new Movies({ graphUrl, graphServer});
	}
}

module.exports = {
	Prefix,
}