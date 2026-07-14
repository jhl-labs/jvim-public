declare module 'asciinema-player' {
  export interface PlayerOptions {
    autoPlay?: boolean;
    loop?: boolean;
    idleTimeLimit?: number;
    theme?: string;
    fit?: string;
  }

  export function create(
    source: string,
    container: Element,
    options?: PlayerOptions,
  ): unknown;
}
