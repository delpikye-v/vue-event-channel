import { EventMap } from "eventbus-z";
export type EmitOptions = {
    transition?: boolean;
};
export type ChannelType<E extends EventMap> = {
    emit<K extends keyof E>(name: K, ...args: E[K]): void;
    emit<K extends keyof E>(name: K, ...args: [...E[K], EmitOptions]): void;
    on<K extends keyof E>(name: K, handler: (...args: E[K]) => void): () => void;
    once<K extends keyof E>(name: K, handler: (...args: E[K]) => void): () => void;
    off<K extends keyof E>(name: K, handler: (...args: E[K]) => void): void;
};
export declare function createChannel<E extends EventMap>(): ChannelType<E>;
