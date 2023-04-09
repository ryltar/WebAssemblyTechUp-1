/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/hello
 * @param slogan `~lib/string/String`
 * @returns `~lib/string/String`
 */
export declare function hello(slogan: string): string;
/**
 * assembly/index/createCompany
 * @returns `assembly/company/Company`
 */
export declare function createCompany(): __Internref4;
/**
 * assembly/index/createWorker
 * @returns `assembly/worker/Worker`
 */
export declare function createWorker(): __Record5<never>;
/**
 * assembly/index/setCompanyName
 * @param company `assembly/company/Company`
 * @param name `~lib/string/String`
 */
export declare function setCompanyName(company: __Internref4, name: string): void;
/**
 * assembly/index/getCompanyName
 * @param company `assembly/company/Company`
 * @returns `~lib/string/String`
 */
export declare function getCompanyName(company: __Internref4): string;
/** assembly/company/Company */
declare class __Internref4 extends Number {
  private __nominal4: symbol;
  private __nominal0: symbol;
}
/** assembly/worker/Worker */
declare interface __Record5<TOmittable> {
  /** @type `~lib/string/String` */
  givenName: string;
  /** @type `~lib/string/String` */
  name: string;
}
