#!/usr/bin/env node

const program = require('commander');
// const chalk = require('chalk')
const generate = require('../src/generate');


/**
 * Usage.
 */

program
.command('create')
.description('quick generate your file')
.alias('g')
.action(function(_,name){
  generate.run(name);
});
program.parse(process.argv);