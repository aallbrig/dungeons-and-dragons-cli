#!/usr/bin/env node

import { Command } from "commander";
import { progLog, debugLog } from "../utils/loggers";
import { testPrompt } from "../inquirer/prompts";

const VERSION = '0.0.2';

export const main = () => {
  const program = new Command();
  program.version(VERSION);

  program
  .command('roll [listOfDice]')
  .description('rolls dice')
  .action(async (listOfDice) => {
    debugLog('roll command called!');
    debugLog(`variable listOfDice value: ${listOfDice}`);
    if (listOfDice) {
      progLog('TODO: validate user input');
      progLog('user input should be a list of dice e.g. "d4" or "d4,d6,d8,d10,d20,d100" or "d4,d4,d4"');
    } else {
      const answers = await testPrompt();
      debugLog(`prompt response:\n${JSON.stringify(answers, null, '  ')}`);
    }
  });

  program
    .command('walk-through [walkThroughName]')
    .description('walk-through name of walk through (test)')
    .action(async (walkThroughName) => {
      debugLog('walk-through command called!');
      debugLog(`variable walkThroughName value: ${walkThroughName}`);
      if (walkThroughName) {
        progLog('TODO: validate user input');
      } else {
        const answers = await testPrompt();
        debugLog(`prompt response:\n${JSON.stringify(answers, null, '  ')}`);
      }
    });

  program.parse(process.argv);
};

main();