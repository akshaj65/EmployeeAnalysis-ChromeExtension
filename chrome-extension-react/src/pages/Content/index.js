import { printLine } from './modules/print';
import { initialize } from './modules/initialize';
import { eventListeners } from './modules/eventListeners';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

window.addEventListener('message', function(event) {
    if (event.source === window && event.data.action === 'addPanel') {
        initialize();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'addPanel') {
        initialize();
    }
});

eventListeners();
