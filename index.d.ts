// Type definitions for find-free-port-sync
// Project: https://github.com/sadiqhabib/find-free-port-sync
// Definitions by: sadiqhabib <https://github.com/sadiqhabib>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function FindFreePortSync(options: FindFreePortSync.IOptions): number;

declare namespace FindFreePortSync {

  interface IOptions {
    start?: number | undefined;
    end?: number | undefined;
    num?: number | undefined;
    ip?: string | undefined;
    port?: number | undefined;
  }


}

export = FindFreePortSync;
