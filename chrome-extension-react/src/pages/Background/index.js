import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import patientsHealth from '../../assets/patientsHealth.json';

console.log('This is the background page.');
console.log('Put the background scripts here.');

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     // Example: Log the message received from the content script
//     console.log('Message received from content script:', message);

//     // Example: Send a message to the popup script
//     chrome.runtime.sendMessage({type: 'contentScriptMessage', data: message});
//   });


// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'getPatientsHealth') {
        // Retrieve data from storage
        chrome.tabs.sendMessage(sender.tab.id, { data: patientsHealth });
        return true; // Keep the message channel open for sendResponse
    }
});
