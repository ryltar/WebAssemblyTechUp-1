import { strict as assert } from 'node:assert';
import { createCompany, createWorker, getCompanyName, hello, setCompanyName } from "../build/release.js";

// Version using class by copy
const worker = createWorker();
assert.equal(worker.givenName, "Jack");
assert.equal(worker.name, "Sparrow");

worker.givenName = "Guillaume";

assert.equal(worker.givenName, "Guillaume");
assert.equal(worker.name, "Sparrow");

// Version using class by reference
const upMan = createCompany(); // we create a default object
setCompanyName(upMan, "UpMan Consulting");
const companyName = getCompanyName(upMan); 
assert.equal(companyName, "UpMan Consulting");

const brand = hello("pour vous avec nous 💙");
assert.equal(brand, "UpMan Consulting, pour vous avec nous 💙 !");