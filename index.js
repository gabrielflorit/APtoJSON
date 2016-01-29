var fs = require('fs');
var chalk = require('chalk');

module.exports = function splitResults(json, directory) {

	// save each json.races item as a separate file
	json.races.forEach(function(race, index, array) {

		// create a result
		const result = Object.assign({}, json, {
			races: [race]
		});

		// create file name, e.g. al-dem-ru or al-dem-state
		// TODO: we'll stick to ru for now. we'll ru/state later
		var state = race.reportingUnits[0].statePostal; // AL
		var party = race.party; // Dem
		var filename = directory + '/' + [state, party, 'ru'].join('-').toLowerCase() + '.json';

		// write file to disk
		fs.writeFileSync(filename, JSON.stringify(result, null, 2));

		// tell user we wrote file to disk
		console.log(chalk.green('Writing ' + filename));

	});

}

