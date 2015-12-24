# APtoJSON
Convert AP API results to many JSON files, one per state-party-racetype combination.

		Usage: APtoJSON [options]

		Options:
			-f, --file       File containing API election results. Must have a <races> field.  [string] [required]
			-d, --directory  Directory where APtoJSON will place the output JSON files  [string] [required]

			Examples:
				APtoJSON -f results.json -d output

## Install

`npm install -g APtoJSON`
