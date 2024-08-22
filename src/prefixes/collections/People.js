const { query } = require("@simpleview/sv-graphql-client");

class People {
	constructor({ graphUrl, graphServer }) {
		this.name = 'people';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		return await query({
			query: `
				query ($filter: training_people_find) {
					training {
						people_find(filter: $filter) ${fields}
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
				mutation ($input: [training_people_insert!]!) {
					training {
						people_insert(input: $input) ${fields}
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
				mutation ($filter: training_people_remove) {
					training {
						people_remove(filter: $filter) ${fields}
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

module.exports = { People }
