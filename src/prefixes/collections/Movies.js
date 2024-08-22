const { query } = require("@simpleview/sv-graphql-client");

class Movies {
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter = {}, headers }) {
		const result = await query({
			query: `
				query ($filter: training_movies_find) {
					training {
						movies_find(filter: $filter) {
							${fields}
						}
					}
				}
			`,
			variables: { filter },
			url: this._graphUrl,
			headers,
			clean: true,
		});

		return result;
	}

	insert() {

	}

	remove() {

	}
}

module.exports = {
	Movies
}