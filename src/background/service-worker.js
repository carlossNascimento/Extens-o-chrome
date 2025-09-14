// Background service worker for extension events
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed.');
});