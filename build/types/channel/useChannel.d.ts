import type { ChannelType } from "./createChannel";
import { EventMap } from "eventbus-z";
export declare function useChannel<E extends EventMap, K extends keyof E>(channel: ChannelType<E>, name: K, handler: (...args: E[K]) => void): void;
