
default: install run

install:
	npm install

run:
	CYPRESS_baseUrl=https://www.heise.de npm run cypress:open
