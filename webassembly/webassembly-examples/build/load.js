import * as fs from 'fs';

const source = fs.readFileSync('./build/release.wasm');
const typedArray = new Uint8Array(source);

const env = {
    memoryBase: 0,
    tableBase: 0,

    memory: new WebAssembly.Memory({
      initial: 256
    }),

    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc'
    }),

    abort: () => {},

    consoleLog: (value) => { console.log(value) }

}

export const { instance } = await WebAssembly.instantiate(typedArray, {
    env: env,
});

