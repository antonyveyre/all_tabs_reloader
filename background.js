chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.reload(tab.id);
      });
    });
  });
  