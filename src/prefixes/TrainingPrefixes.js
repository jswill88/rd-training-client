const { MoviesPrefix } = require('./collections/MoviesPrefix');
const { PeoplePrefix } = require('./collections/PeoplePrefix');

class TrainingPrefixes {
	constructor({ graphUrl, graphServer }) {
		this.name = 'training';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
		this.movies = new MoviesPrefix({ graphUrl, graphServer });
		this.people = new PeoplePrefix({ graphUrl, graphServer });
	}
}

module.exports = {
	TrainingPrefixes,
	MoviesPrefix,
	PeoplePrefix
}
