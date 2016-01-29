var test = require('tape');

test('state=MA, ru=state', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=MA, ru=ru', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=MA, ru=state, party=DEM', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=MA, ru=ru, party=GOP', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=all, ru=state', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=all, ru=ru', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=all, ru=state, party=DEM', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

test('state=all, ru=ru, party=GOP', function(assert) {
	assert.equal(1, 2);
	assert.end();
});

