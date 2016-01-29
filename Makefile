variable := $(shell cat ap.token)
test = true

all:

	rm -rf test/input/*
	curl 'https://api.ap.org/v2/elections/2016-03-01?statepostal=MA&test=true&apikey=$(variable)&format=json' > test/input/MA_primary-state.json
