#!/usr/bin/env node
const program = require('commander');
const generate = require('../src/generate');
program
  .command('generate')
  .description('quick generate your file')
  .alias('g')
  .action(function (_, name) {
    generate.run(name);
  });
program.parse(process.argv);