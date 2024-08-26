const { query } = require("@simpleview/sv-graphql-client");

class People {
	constructor({ graphUrl, graphServer }) {
		this.name = 'people';
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		const variables = {
			filter
		}

		const response = await query({
			query: `
				query ($filter: training_people_find) {
					training {
						people_find(filter: $filter) {
							${fields}
						}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			clean: true,
			key: 'training.people_find'
		});

		return response;
	}

	async insert({ fields, context, input, headers }) {
		const variables = {
			input
		}

		const response = await query({
			query: `
				mutation ($input: [training_people_insert!]!) {
					training {
						people_insert(input: $input) {
							${fields}
						}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			clean: true,
			key: 'training.people_insert'
		});

		return response;
	}

	async remove({ fields, context, filter, headers }) {
		const variables = {
			filter
		}

		const response = await query({
			query: `
				mutation ($filter: training_people_remove) {
					training {
						people_remove(filter: $filter) ${fields}
					}
				}
			`,
			variables,
			url: this._graphUrl,
			headers,
			clean: true,
			key: 'training.people_remove'
		});

		return response;
	}
}

module.exports = {
	People
}
