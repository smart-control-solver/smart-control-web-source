var importObj = {js: {
    import1: () => console.log("hello,"),
    import2: () => console.log("world!")
}};

/**
 * @example Подсчет факториала
 * `fetch('/wasm/factorial.wasm')
 * .then(response => WebAssembly.instantiateStreaming(response))
 * .then((v) => v.instance.exports.main(8))
 * .then(console.log)`
 */
/**
 * @example передача колбеков в васм
 * `fetch('/wasm/log-test.wasm')
 * .then(response => WebAssembly.instantiateStreaming(response, {js: {
 *      import1: () => console.log("hello,"),
 *      import2: () => console.log("world!")
 *  }}))
 * .then((v) => v.instance.exports.f())
 * .then(console.log, console.error);`
 */
export async function instatiateWasm(): Promise<any> {
    fetch('/wasm/factorial.wasm')
        .then(response => WebAssembly.instantiateStreaming(response))
        .then((v) => v.instance.exports.main(8))
        .then(console.log);
    return fetch('/wasm/log-test.wasm')
        .then(response => WebAssembly.instantiateStreaming(response, importObj))
        .then((v) => v.instance.exports.f())
        .then(console.log, console.error);
    // return fetch('/wasm/demo.wasm')
    //     .then(response => {
    //         // console.log(response);
    //         // console.log(response.text());
    //         return response.arrayBuffer();
    //     })
    //     .then(buffer => {
    //         // console.log(buffer);
    //         return buffer;
    //     })
    //     .then(bits => WebAssembly.instantiate(bits, importObj))
        // .then(module => { return new WebAssembly.Instance(module) });
}
