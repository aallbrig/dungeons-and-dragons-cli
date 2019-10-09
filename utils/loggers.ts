type Message = string;
export const timestampedLog = (m: Message) => console.log(`${Date.now()} - ${m}`);
export const infoLog = (m: Message) => timestampedLog(`info - ${m}`);
export const debugLog = (m: Message) => timestampedLog(`debug - ${m}`);
export const progLog = (m: Message) => timestampedLog(`programmer - ${m}`);
