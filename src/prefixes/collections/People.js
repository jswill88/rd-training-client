const { query } = require("@simpleview/sv-graphql-client");

class People {
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter = {}, headers }) {
		if (typeof fields !== string) {
			throw new Error("'fields' must be included as a string e.g. `{ success, message }`");
		}

		const queryString = `
			query ($filter: training_people_find) {
				training {
						people_find(filter: $filter) ${fields}
					}
				}
		`;

		const variables = { filter };

		return await this._query({ queryString, variables, headers });
	}

	async insert({ fields, context, input = [], headers }) {
		if (typeof fields !== string) {
			throw new Error("'fields' must be included as a string e.g. `{ success, message }`");
		}

		const queryString = `
			mutation ($input: [training_people_insert!]!) {
				training {
					people_insert(input: $input) ${fields}
				}
			}
		`;

		const variables = { input };

		return await this._query({ queryString, variables, headers });
	}

	async remove({ fields, context, filter = {}, headers }) {
		if (typeof fields !== string) {
			throw new Error("'fields' must be included as a string e.g. `{ success, message }`");
		}

		const queryString = `
			mutation ($filter: training_people_remove) {
				training {
					people_remove(filter: $filter) ${fields}
				}
			}
		`;

		const variables = { filter };

		return await this._query({ queryString, variables, headers });
	}

	async _query({ queryString, variables, headers }) {
		const result = await query({
			query: queryString,
			variables,
			url: this._graphUrl,
			headers,
			clean: true,
		});

		return result;
	}
}

module.exports = { People }
