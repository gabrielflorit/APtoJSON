# ap2json
Convert AP API results to many JSON files, one per state-party-racetype combination.

	Usage: ap2json [options]

	Options:
		-f, --file       File containing API election results. Must have a <races> field.  [string] [required]
		-d, --directory  Directory where ap2json will place the output JSON files  [string] [required]

		Examples:
			ap2json -f results.json -d output

## Install

`npm install -g ap2json`
