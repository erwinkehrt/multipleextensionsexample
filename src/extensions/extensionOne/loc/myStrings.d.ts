declare interface IExtensionOneCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ExtensionOneCommandSetStrings' {
  const strings: IExtensionOneCommandSetStrings;
  export = strings;
}
