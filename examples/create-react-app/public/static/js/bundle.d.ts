export { preload, fetchKey as fetch };
import { Config } from './schema';
type Entry = {
    url: string;
    size: number;
    mime: string;
};
declare function fetchKey(key: string, config: Config): Promise<Blob>;
declare function preload(config: Config): Promise<Map<string, Entry>>;
