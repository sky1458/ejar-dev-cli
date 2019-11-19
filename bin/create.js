#!/usr/bin/env node
const program = require('commander');
const generate = require('../src/generate');
program
  .command('generate')
  .alias('g')
  .description('quick generate your file')
  .action(function (_, name) {
    generate.run(name);
  });
program.parse(process.argv);