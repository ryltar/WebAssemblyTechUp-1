import { strict as assert } from 'node:assert';
import { add, createCompany, createWorker, getCompanyArray, getCompanyName, getStringArray, getWorkerArray, hello, pushCompanyValue, pushStringValue, pushWorkerValue, returnBoolean, setCompanyName } from "../build/release.js";

// version using string
const brand = hello("pour vous avec nous 💙");
assert.equal(brand, "UpMan Consulting, pour vous avec nous 💙 !");

//version using i8
const number = add(25, 1);
assert.equal(number, 26);

//version using boolean
const boolean = returnBoolean(true);
assert.equal(boolean, true);

// Version using class by copy
const worker = createWorker();
assert.equal(worker.givenName, "Jack");
assert.equal(worker.name, "Sparrow");

worker.givenName = "Guillaume";

assert.equal(worker.givenName, "Guillaume");
assert.equal(worker.name, "Sparrow");

// Version using class by reference
const upMan = createCompany();
setCompanyName(upMan, "UpMan Consulting");
const companyName = getCompanyName(upMan); 
assert.equal(companyName, "UpMan Consulting");

// version using array of string
let myArrayOfString = getStringArray();
myArrayOfString = pushStringValue(myArrayOfString, "IN Groupe");
assert.deepEqual(myArrayOfString, [ 'UpMan Consulting', 'IN Groupe' ]);

// version using array of object by copy
let myArrayOfWorker = getWorkerArray();
myArrayOfWorker = pushWorkerValue(myArrayOfWorker, { givenName: 'Guillaume', name: 'Martin' });

const expectedArrayOfWorker = [
    { givenName: 'Jack', name: 'Sparrow' },
    { givenName: 'Guillaume', name: 'Martin' }
  ]

assert.deepEqual(myArrayOfWorker, expectedArrayOfWorker);

// version using array of object by reference
let myArrayOfCompany = getCompanyArray();
const upManFR = myArrayOfCompany[0];
setCompanyName(upManFR, "UpMan France");

const upManPH =  createCompany();
setCompanyName(upManPH, "UpMan Philippines");
myArrayOfCompany = pushCompanyValue(myArrayOfCompany, upManPH);

const upManFRCompanyName = getCompanyName(myArrayOfCompany[0]);
const upManPHCompanyName = getCompanyName(myArrayOfCompany[1]);

assert.equal(upManFRCompanyName, "UpMan France");
assert.equal(upManPHCompanyName, "UpMan Philippines");

