
VERSION = $(shell cat package.json | sed -n 's/.*"version": "\([^"]*\)",/\1/p')

SHELL = /usr/bin/env bash

default: install
.PHONY: default test install tag

version:
	@echo $(VERSION)
	

install:
	npm install
	npm i -D jspm@beta
	$$(npm bin)jspm install

test:
	jspm install --quick
	$$(npm bin)/mocha 

runexample: build serve

serve:
	@echo "Point your browser to http://localhost:3000/example/ to check the examples"
	$$(npm bin)/serve .

build:
	@echo "Generating a single bundle of all tags"
	$$(npm bin)/jspm build 'tags/todo.tag + tags/timer.tag + tags/panels.tag - riot' example/dist/alltags.js --format umd --skip-source-maps
	@echo "Generating a monolihyc build using r.js optimizer"
	$$(npm bin)/r.js -o example/requirejs.build.js


update_version:
	@echo "Current version is " ${VERSION}
	@echo "Next version is " $(v)
	sed -i s/'"$(VERSION)"'/'"$(v)"'/ package.json

tag_and_push:
		git add --all
		git commit -a -m "Tag v$(v) $(m)"
		git tag v$(v)
		git push
		git push --tags
		npm publish

tag: update_version tag_and_push		
		