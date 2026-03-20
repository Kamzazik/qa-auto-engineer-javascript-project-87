install:
	npm ci

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm run coverage