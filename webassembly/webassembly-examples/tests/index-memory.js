import { strict as assert } from 'node:assert';
import { instance } from "../build/load.js";
import { getString, setString } from "./utility/utility.js";

const { __pin, __unpin, hello, createCompany, getCompanyName, setCompanyName } = instance.exports;


// Version using class by reference
const upMan = createCompany(); // we create a default object

const companyName = setString("UpMan Consulting");

setCompanyName(upMan, companyName);

const companyNamePtr = getCompanyName(upMan); // we got a pointer from webassembly module memory
const retrieveCompanyName = getString(companyNamePtr); // retrieve string value from webassembly module memory's pointer 

assert.equal(retrieveCompanyName, "UpMan Consulting");

// Version using pointers as parameter and do some tricks with webassembly memory.

const pti = setString("pour vous avec nous 💙");
const pto = __pin(hello(pti));
const brand = getString(pto);
 
__unpin(pti);
__unpin(pto);

assert.equal(brand, "UpMan Consulting, pour vous avec nous 💙 !")