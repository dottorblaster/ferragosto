#!/usr/bin/env node

const nopt = require('nopt'),
	opts = nopt({"fetch": Boolean}, {"f": ["--fetch"]}, process.argv),
	Fs = require('fs'),
	Request = require('request'),
	Chalk = require('chalk'),
  Home = require('homedir')();

function fetch(cb) {
	const RequestUrl = "http://chefacciamoaferragosto.it/wp-json/wp/v2/posts";

  console.log(Chalk.yellow('Fetching...\n'));

  Request.get(RequestUrl, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      Fs.writeFile(Home + '/.ferragosto.json', body, (err) => {
        if (err) {
          return console.log(Chalk.red('HTTP request failed! A Ferragosto s\'attaccamo popo ar ca...\n'));
        }
        if (!!cb) {
          cb();
        }
      });
    }
  });
}

function display(cb) {
  const set = require(Home + '/.ferragosto.json'),
    i = Math.floor(Math.random() * set.length);

  console.log(Chalk.cyan('Che facciamo a ferragosto?\n') + Chalk.green('- ' + set[i].content.plaintext + '\n'));

	if (!!cb) {
		cb();
	}
}

Fs.exists(Home + '/.ferragosto.json', (e) => {
	if (!e) {opts.fetch = true;}
	opts.hasOwnProperty('fetch') && !!opts.fetch ? fetch(display) : display();
});
