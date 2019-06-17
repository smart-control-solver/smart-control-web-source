// Тупой тс не знает ничего про васм. Поэтому пришлось объявить здесь апи васма, апи его функций
declare namespace WebAssembly {
    interface Module { }
    interface Instance<T = any> { // {main(...arg): any}
        exports: T;
    }
    interface ResultObject {
        module: Module;
        instance: Instance;
    }

    var Instance: {new(module: Module, imports?: any): Instance};
    function compile(wasmCode: ArrayBuffer): Module;
    function instantiate(wasmCode: ArrayBuffer, imports?: any): ResultObject;

    function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
    function instantiateStreaming(source: Response | Promise<Response>, importObject?: object): Promise<ResultObject>;
}

declare module 'file-loader?name=[name].js!*' {
    const value: string;
    export = value;
}