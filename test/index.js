var test = require('tape');
var fs = require('fs');
var shelljs = require('shelljs');
var rimraf = require('rimraf');
var tempDir = __dirname + '/temp';
var inputDir = __dirname + '/input';

test('All primaries on 2016-02-09 (NH-DEM, NH-GOP) should create state and ru-level results', function(assert) {

	var inputFile = inputDir + '/2016-02-09-P-ru.json';

	// empty the temp directory
	rimraf.sync(tempDir);

	// run ap2json on the file
	shelljs.exec('bin/ap2json -f ' + inputFile + ' -d ' + tempDir);

	// assert that the temp directory has the appropriate number of files
	var files = fs.readdirSync(tempDir);
	assert.equal(files.length, 4);

	// assert, one by one, each file's contents
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2016-02-09-nh-dem-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/nh-dem-state.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2016-02-09-nh-dem-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/nh-dem-ru.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2016-02-09-nh-gop-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/nh-gop-state.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2016-02-09-nh-gop-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/nh-gop-ru.json', 'utf8'))
	);

	assert.end();
});

test('All primaries on 2012-03-13 (AL-DEM, AL-GOP, HI-GOP, MS-GOP) should create state and ru-level results', function(assert) {

	var inputFile = inputDir + '/2012-03-13-P-ru.json';

	// empty the temp directory
	rimraf.sync(tempDir);

	// run ap2json on the file
	shelljs.exec('bin/ap2json -f ' + inputFile + ' -d ' + tempDir);

	// assert that the temp directory has the appropriate number of files
	var files = fs.readdirSync(tempDir);
	assert.equal(files.length, 8);

	// assert, one by one, each file's contents
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-al-dem-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/al-dem-ru.json', 'utf8'))
	);
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-al-dem-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/al-dem-state.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-al-gop-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/al-gop-ru.json', 'utf8'))
	);
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-al-gop-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/al-gop-state.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-hi-gop-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/hi-gop-ru.json', 'utf8'))
	);
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-hi-gop-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/hi-gop-state.json', 'utf8'))
	);

	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-ms-gop-ru.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/ms-gop-ru.json', 'utf8'))
	);
	assert.deepEqual(
		JSON.parse(fs.readFileSync(inputDir + '/2012-03-13-ms-gop-state.json', 'utf8')),
		JSON.parse(fs.readFileSync(tempDir + '/ms-gop-state.json', 'utf8'))
	);

	assert.end();
});
