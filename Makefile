install: 
	npm ci

brain-games: 
	node bin/brain-games.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .
	
brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

start-game:
	node src/index.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression: 
	node bin/btain-progression.js