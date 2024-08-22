const { query } = require("@simpleview/sv-graphql-client");

class Movies {
	constructor({ graphUrl, graphServer }) {
		this.name = 'movies';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		return await query({
			query: `
				query ($filter: training_movies_find) {
					training {
						movies_find(filter: $filter) ${fields}
					}
				}
			`,
			variables: { filter },
			url: this._graphUrl,
			headers,
			clean: true,
		});
	}

	async insert({ fields, context, input, headers }) {
		return await query({
			query: `
				mutation ($input: [training_movies_insert!]!) {
					training {
						movies_insert(input: $input) ${fields}
					}
				}
			`,
			variables: { input },
			url: this._graphUrl,
			headers,
			clean: true,
		});
	}

	async remove({ fields, context, filter, headers }) {
		return await query({
			query: `
				mutation ($filter: training_movies_remove) {
					training {
						movies_remove(filter: $filter) ${fields}
					}
				}
			`,
			variables: { filter },
			url: this._graphUrl,
			headers,
			clean: true,
		});
	}
}

module.exports = { Movies }
