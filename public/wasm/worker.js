/* eslint-disable no-restricted-globals */

// TODO: нужен рабочий код
// var workerCallbacks = {
//     js: {
//         next: function(event) { self.postMessage({ type: 'WASM_NEXT', event: 'Огонь' }); },
//         error: function(event) { self.postMessage({ type: 'WASM_ERROR', event: 'Что-то пошло не так' }); },
//         complete: function() { self.postMessage({ type: 'WASM_COMPLETE' }); },
//     }
// };
// var wasm = fetch('/wasm/test2.wasm')
//     .then(function(response) { return WebAssembly.instantiateStreaming(response, workerCallbacks); })
//     .then(function(wa) { return wa.instance; });

var wasm = fetch('/wasm/log-test.wasm')
.then(response => WebAssembly.instantiateStreaming(response, {js: {
      import1: function(event) { self.postMessage({ type: 'WASM_NEXT', event: 'Огонь' }); },
      import2: function(event) { self.postMessage({ type: 'WASM_ERROR', event: 'Что-то пошло не так' }); }
  }}))
.then(function(wa) { return wa.instance; });

self.onmessage = function(event) {
    wasm.then(function(instance) {
        if (event.data.type === 'solve') {
            instance.exports.f();
            // instance.solve(event.task);
        } else if (event.data.type === 'cancel') {
            instance.exports.cancel();
        } else {
            console.error('Неизвестное сообщение');
        }
    });
};



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
