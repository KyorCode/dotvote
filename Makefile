REPORTER = spec
TESTS = test/server/test/*.js

test:
		@NODE_ENV=test ./node_modules/.bin/mocha \
				--reporter $(REPORTER) \
				--colors \
				--ui bdd \
				$(TESTS)
				
.PHONY: test