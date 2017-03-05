declare namespace annyang {
  interface SpeechRecognition {
  }

  interface StartOptions {
    autoRestart: boolean;
    continous: boolean;
    paused: boolean;
  }

  type VoiceCommands = {
    [key: string]: Function;
  };

  function addCommands(commands: VoiceCommands): void;

  function removeCommands(commandNames?: string | string[]): void;

  function start(startOptions?: StartOptions): void;

  function abort(): void;

  function pause(): void;

  function resume(): void;

  function debug(newState: boolean): void;

  function setLanguage(language: string): void;

  function isListening(): boolean;

  function addCallback(type: string, callback: Function, context?: any): void;

  function removeCallback(type: string, callback: Function): void;

  function getSpeechRecognizer(): SpeechRecognition;

  function trigger(commandNames: string | string[]): void;
}

declare module "annyang" {
  import typings = annyang;
  export = typings;
}
