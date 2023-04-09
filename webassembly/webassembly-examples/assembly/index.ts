import { Company } from './company';
import { Worker } from './worker';
// The entry file of your WebAssembly module.

export function hello(slogan: string): string {
  return "UpMan Consulting, " + slogan + " !";
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

@external("env", "consoleLog")
declare function consoleLog(s: string): void
