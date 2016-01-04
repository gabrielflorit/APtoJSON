var fs = require('fs');
var chalk = require('chalk');

module.exports = function splitResults(json, directory) {

	var electionDate = json.electionDate;

	// save each json.races item as a separate file
	json.races.forEach(function(race, index, array) {

		// create file name
		var state = race.reportingUnits[0].statePostal;
		var party = race.party;
		var raceType = race.raceType;
		var filename = directory + '/' + [state, party, raceType].join('-') + '.json';

		// add election date to race
		race.electionDate = electionDate;

		fs.writeFileSync(filename, JSON.stringify(race, null, 2));
		console.log(chalk.green('Writing ' + filename));

	});

}

