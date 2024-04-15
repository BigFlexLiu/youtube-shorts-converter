
function tabChanged(changeInfo, tabId) {
    if (changeInfo.url.includes('shorts')) {
        const newUrl = changeInfo.url.replace('/shorts/', '/watch?v=');
        browser.tabs.update(tabId, { url: newUrl, loadReplace: true });
    }
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    tabChanged(changeInfo, tabId);
});