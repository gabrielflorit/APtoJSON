variable := $(shell cat ap.token)
test = true

all:

	rm -rf test/input/*

	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru' | jq '{electionDate, races}' > test/input/2012-03-13-P-ru.json

	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru&statePostal=AL&party=dem' | jq '{electionDate, races}' > test/input/2012-03-13-al-dem-ru.json
	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&statePostal=AL&party=dem'          | jq '{electionDate, races}' > test/input/2012-03-13-al-dem-state.json

	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru&statePostal=AL&party=gop' | jq '{electionDate, races}' > test/input/2012-03-13-al-gop-ru.json
	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&statePostal=AL&party=gop'          | jq '{electionDate, races}' > test/input/2012-03-13-al-gop-state.json

	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru&statePostal=HI&party=gop' | jq '{electionDate, races}' > test/input/2012-03-13-hi-gop-ru.json
	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&statePostal=HI&party=gop'          | jq '{electionDate, races}' > test/input/2012-03-13-hi-gop-state.json

	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&level=ru&statePostal=MS&party=gop' | jq '{electionDate, races}' > test/input/2012-03-13-ms-gop-ru.json
	curl 'https://api.ap.org/v2/elections/2012-03-13?apikey=$(variable)&officeID=P&format=json&statePostal=MS&party=gop'          | jq '{electionDate, races}' > test/input/2012-03-13-ms-gop-state.json