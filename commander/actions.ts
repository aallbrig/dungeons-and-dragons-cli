import { testPrompt } from "../inquirer/prompts";
import { debugLog, progLog } from "../utils/loggers";

export const rollAction = async (serializedListOfDice:string) => {
  debugLog('roll command called!');
  debugLog(`variable serializedListOfDice value: ${serializedListOfDice}`);
  if (serializedListOfDice) {
    progLog('TODO: validate user input');
    progLog('user input should be a list of dice e.g. "d4" or "d4,d6,d8,d10,d20,d100" or "d4,d4,d4"');
  } else {
    const answers = await testPrompt();
    debugLog(`prompt response:\n${JSON.stringify(answers, null, '  ')}`);
  }
};
export const walkThroughAction = async (walkThroughName:string) => {
  debugLog('walk-through command called!');
  debugLog(`variable walkThroughName value: ${walkThroughName}`);
  if (walkThroughName) {
    progLog('TODO: validate user input');
  } else {
    const answers = await testPrompt();
    debugLog(`prompt response:\n${JSON.stringify(answers, null, '  ')}`);
  }
};