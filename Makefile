variable := $(shell cat ap.token)
test = true

all:

	rm -rf test/input/*
	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru' | python -mjson.tool > test/input/2012-03-13-P-ru.json
