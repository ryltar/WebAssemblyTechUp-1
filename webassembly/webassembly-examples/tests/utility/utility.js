import { instance } from "../../build/load.js";

const { __pin, __new, memory } = instance.exports;

//set string from webassembly
export function setString(string) {
    const length = string.length;
 
    const pt = __new(length << 1, 2);
     
    const ibytes = new Uint16Array(memory.buffer);
    
    for (let i = 0, p = pt >>> 1; i < length; ++i)
    ibytes[p + i] = string.charCodeAt(i);
    
    return __pin(pt);
}

//get string from webassembly memory module given a pointer
export function getString(ptr) {
    const SIZE_OFFSET = -4;
    const olength = new Uint32Array(memory.buffer)[ptr + SIZE_OFFSET >>> 2];
 
    const obytes = new Uint16Array(
        memory.buffer,
        ptr,
        olength >>> 1
    );

    const enc = new TextDecoder("utf-16");

    const decodedText = enc.decode(obytes);

    return decodedText;
}