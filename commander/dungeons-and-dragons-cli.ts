#!/usr/bin/env node

import { Command } from "commander";
import { rollAction, walkThroughAction } from "./actions";

import { debugLog, progLog } from "../utils/loggers";

const VERSION = '0.0.2';

export const dndCLI = (argv: string[]) => {
  debugLog('D&D CLI called');
  const program = new Command();
  program.version(VERSION);

  program
  .command('roll [listOfDice]')
  .description('rolls dice')
  .action(rollAction);

  program
    .command('walk-through [walkThroughName]')
    .description('walk-through name of walk through (test)')
    .action(walkThroughAction);

  progLog(`Commands added: roll, walk-through`);
  progLog(`Commands not added: server start/stop`);

  program.parse(argv);
};

dndCLI(process.argv);