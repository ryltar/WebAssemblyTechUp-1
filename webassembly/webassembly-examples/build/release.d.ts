/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/hello
 * @param slogan `~lib/string/String`
 * @returns `~lib/string/String`
 */
export declare function hello(slogan: string): string;
/**
 * assembly/index/add
 * @param number `i8`
 * @param toAdd `i8`
 * @returns `i8`
 */
export declare function add(number: number, toAdd: number): number;
/**
 * assembly/index/returnBoolean
 * @param boolean `bool`
 * @returns `bool`
 */
export declare function returnBoolean(boolean: boolean): boolean;
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
/**
 * assembly/index/getStringArray
 * @returns `~lib/array/Array<~lib/string/String>`
 */
export declare function getStringArray(): Array<string>;
/**
 * assembly/index/pushStringValue
 * @param array `~lib/array/Array<~lib/string/String>`
 * @param value `~lib/string/String`
 * @returns `~lib/array/Array<~lib/string/String>`
 */
export declare function pushStringValue(array: Array<string>, value: string): Array<string>;
/**
 * assembly/index/getWorkerArray
 * @returns `~lib/array/Array<assembly/worker/Worker>`
 */
export declare function getWorkerArray(): Array<__Record5<never>>;
/**
 * assembly/index/pushWorkerValue
 * @param array `~lib/array/Array<assembly/worker/Worker>`
 * @param worker `assembly/worker/Worker`
 * @returns `~lib/array/Array<assembly/worker/Worker>`
 */
export declare function pushWorkerValue(array: Array<__Record5<undefined>>, worker: __Record5<undefined>): Array<__Record5<never>>;
/**
 * assembly/index/getCompanyArray
 * @returns `~lib/array/Array<assembly/company/Company>`
 */
export declare function getCompanyArray(): Array<__Internref4>;
/**
 * assembly/index/pushCompanyValue
 * @param array `~lib/array/Array<assembly/company/Company>`
 * @param company `assembly/company/Company`
 * @returns `~lib/array/Array<assembly/company/Company>`
 */
export declare function pushCompanyValue(array: Array<__Internref4>, company: __Internref4): Array<__Internref4>;
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
