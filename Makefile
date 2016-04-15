VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: install
.PHONY: default test install tag

version:
	@echo $(VERSION)
	

install:
	npm install
	jspm install

test:
	./node_modules/.bin/mocha 

runexample: build serve

serve:
	@echo "Point your browser to http://localhost:3000/example/ to check the examples"
	./node_modules/.bin/serve .

build:
	@echo "Generating a single bundle of all tags"
	jspm bundle-sfx 'tag!tags/todo.tag + tag!tags/timer.tag + tag!tags/panels.tag - riot' example/dist/alltags.js --format umd --skip-source-maps
	@echo "Generating a monolihyc build using r.js optimizer"
	./node_modules/.bin/r.js -o example/requirejs.build.js


update_version:
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/"$(VERSION)"/"$(v)"/g package.json

tag_and_push:
		git add --all
		git commit -a -m "Tag v $(v) $(m)"
		git tag v$(v)
		git push
		git push --tags
		npm publish

tag: update_version tag_and_push		
		