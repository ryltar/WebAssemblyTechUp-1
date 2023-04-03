import { strict as assert } from 'node:assert';
import { instance } from "../build/load.js";

const { __pin, __unpin, __new, memory, hello } = instance.exports;

const slogan = "pour vous avec nous 💙";


// Version using simple string as a parameter

const upManHello = hello(slogan);

console.log(upManHello);

assert.equal(upManHello, "UpMan Consulting, pour vous avec nous  !")


// Version using pointers as parameter and do some tricks with webassembly memory.

const length = slogan.length;
 
const pt = __new(length << 1, 2);
 
const ibytes = new Uint16Array(memory.buffer);


for (let i = 0, p = pt >>> 1; i < length; ++i)
ibytes[p + i] = slogan.charCodeAt(i);

const pti = __pin(pt);
 
const pto = __pin(hello(pti));
 
const SIZE_OFFSET = -4;
const olength = new Uint32Array(memory.buffer)[pto + SIZE_OFFSET >>> 2];
 
const obytes = new Uint16Array(
    memory.buffer,
    pto,
    olength >>> 1
);

const enc = new TextDecoder("utf-16");

const brand = enc.decode(obytes); 
 
__unpin(pti);
__unpin(pto);

connsole.log(brand);

assert.equal(brand, "UpMan Consulting, pour vous avec nous 💙 !")