import { Company } from './company';
import { Worker } from './worker';
// The entry file of your WebAssembly module.

export function hello(slogan: string): string {
  return "UpMan Consulting, " + slogan + " !";
}

export function add(number: i8, toAdd: i8): i8 {
  return number + toAdd;
}

export function returnBoolean(boolean: boolean): boolean {
  return boolean;
}

export function createCompany(): Company {
  return new Company();
}

export function createWorker(): Worker {
  return {
    givenName: "Jack",
    name: "Sparrow"
  };
}

export function setCompanyName(company: Company, name: string): void {
  company.name = name;
}

export function getCompanyName(company: Company): string {
  return company.getName();
}

export function getStringArray(): Array<string> {
  let array = new Array<string>();
  array.push("UpMan Consulting");
  return array;
}

export function pushStringValue(array: Array<string>, value: string): Array<string> {
  array.push(value);
  return array;
}

export function getWorkerArray(): Array<Worker> {
  let array = new Array<Worker>();
  array.push(new Worker());
  return array;
}

export function pushWorkerValue(array: Array<Worker>, worker: Worker): Array<Worker> {
  array.push(worker);
  return array;
}

export function getCompanyArray(): Array<Company> {
  let array = new Array<Company>();
  array.push(new Company());
  return array;
}

export function pushCompanyValue(array: Array<Company>, company: Company): Array<Company> {
  array.push(company);
  return array;
}

