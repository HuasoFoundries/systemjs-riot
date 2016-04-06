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
	jspm install --quick
	jspm bundle-sfx todo.tag! todo.js --format amd 
	node test.js

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
		