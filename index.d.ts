declare module 'say' {
  const say: SayJS.Say;

  namespace SayJS {
    type errorCallback = (err: string) => void;

    type getInstalledVoicesErrorCallback = (err: string, voices: string[]) => void;

    class Say {
      public export(text: string, voice?: string, speed?: number, filePath?: string, callback?: errorCallback): void;
      public speak(text: string, voice?: string, speed?: number, callback?: errorCallback): void;
      public stop(): void;
      public getInstalledVoices(callback: getInstalledVoicesErrorCallback): void;
    }
  }

  export = say;
}