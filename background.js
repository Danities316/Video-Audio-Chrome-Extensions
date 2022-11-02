chrome.runtime.onInstalled.addListener(() =>{
    //using declarativeContent.onPageChanged to remove previous rules and add new ones
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            //conditions to be meet for an action to be taken
            conditions: [
                //matching web pages if and only if all listed criteria are met.We are mathing the page url here
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostContains: 'youtube'}
                })
            ],
            // Action to be taken if conditions are met. 
            // we are using ShowPageAction() here - a Declarative event action that shows the extension's toolbar action
            actions: [new chrome.declarativeContent.ShowPageAction() ]
        }])
    })
});

chrome.runtime.onMessage.addListener((message) =>{
    var url = 'http://localhost:4000/download?'
    var queryString = Object.keys(message).map(key => key + '=' + message[key]).join('&')
    url += queryString
    chrome.downloads.download({
        url: url,
        filename: "YoutubeDownloader/" + message.filename + '.' + message.format}, function(downloadID){
            chrome.downloads.show(downloadID)
    })
})