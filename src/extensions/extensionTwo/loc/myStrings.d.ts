declare interface IExtensionTwoCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ExtensionTwoCommandSetStrings' {
  const strings: IExtensionTwoCommandSetStrings;
  export = strings;
}
