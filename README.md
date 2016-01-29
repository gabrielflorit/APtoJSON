# ap2json
TODO
explain how this only does primaries for now
also do the non-ru version - make script spit out state-level
make the makefile delete nextrequest and timeframe so we don't have to do it then.

Convert AP API results to many JSON files, one per state-party-racetype combination.

	Usage: ap2json [options]

	Options:
		-f, --file       File containing API election results. Must have a <races> field.  [string] [required]
		-d, --directory  Directory where ap2json will place the output JSON files.  [string] [required]
		-c, --clear      Whether to clear output directory before writing output files.  [boolean] [default: true]

		Examples:
			ap2json -f results.json -d output -c false

## Real-world example

```sh
curl 'https://api.ap.org/v2/elections/2016-02-01?statepostal=IA&test=true&level=ru&apikey=<APTOKEN>&format=json' > ia.json
ap2json -f ia.json -d races
```
![output](https://cloud.githubusercontent.com/assets/370976/12659255/d3e5a3ce-c5db-11e5-8e2d-0197fd06a075.png)

## Install

`npm install -g ap2json`
