/* eslint-disable no-restricted-globals */
/**
 * Когда-нибудь в CRA начнут нормально компилиться воркеры на тс,
 * а пока следим за PR @link https://github.com/facebook/create-react-app/pull/5886
 * TODO: переписать на тс, ПР будет принят
 */
let wasm;

self.onmessage = mainThreadEvent => {
    const listener = nestedWorkerEvent => {
        if (nestedWorkerEvent.type === 'READY') {
            wasm.postMessage(mainThreadEvent.data.task);
        } else {
            self.postMessage(nestedWorkerEvent.data);
        }
    };


    if (mainThreadEvent.data.type === 'solve') {
        wasm = new Worker('/wasm/wasm.js');
        wasm.addEventListener('message', listener);
    } else if (mainThreadEvent.data.type === 'cancel') {
        wasm.removeEventListener('message', listener);
        wasm.terminate();
    } else {
        console.error('Неизвестное сообщение');
    }
};
