import { EventMap } from 'eventbus-z';
export { EventMap } from 'eventbus-z';

type EmitOptions = {
    transition?: boolean;
};
type ChannelType<E extends EventMap> = {
    emit<K extends keyof E>(name: K, ...args: E[K]): void;
    emit<K extends keyof E>(name: K, ...args: [...E[K], EmitOptions]): void;
    on<K extends keyof E>(name: K, handler: (...args: E[K]) => void): () => void;
    once<K extends keyof E>(name: K, handler: (...args: E[K]) => void): () => void;
    off<K extends keyof E>(name: K, handler: (...args: E[K]) => void): void;
};
declare function createChannel<E extends EventMap>(): ChannelType<E>;

declare function useChannel<E extends EventMap, K extends keyof E>(channel: ChannelType<E>, name: K, handler: (...args: E[K]) => void): void;

export { createChannel, useChannel };
export type { ChannelType, EmitOptions };
