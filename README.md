# Samsung Serif TV

## Requirements

For build and development requires [node.js >= 0.10.23](http://nodejs.org/) and [npm >= 1.4.28](https://www.npmjs.org/)
Note: You need to install stable Node.js versions >= 0.8.0.
Odd version numbers of Node.js are considered
unstable development versions.

To install other node versions
you need [nvm](https://www.npmjs.org/package/nvm).
To check which version you are running:

	node --version

To install another version run:

	nvm install v0.10.23


You will then need [Grunt](http://gruntjs.com) and [Bower](http://bower.io).

## Getting Started

To globally install Grunt and Bower, run the following from the command line:

	npm install -g grunt-cli bower

Install Grunt plugins and other dependencies:

	npm install

Install Bower components

	bower install

Install fontforge for icon webfont generator

On Mac:

brew install ttfautohint fontforge --with-python

On Windows:

npm install grunt-webfont --save-dev

## Upgrading

If you'd like to upgrade to a newer version of the project's dependencies down the road just run:

	bower update

## Back-end and Front-end developers & deployment tasks

Run `grunt dev` for front-end development and `grunt build` or `grunt`
to produce the production ready files
