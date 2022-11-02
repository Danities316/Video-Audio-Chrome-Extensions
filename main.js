window.onload = function(){
    const quality = document.getElementById('quality')
    const filename = document.getElementById('filename')
    const format = document.getElementById('format')
    const downloadBtn = document.getElementById('download')
    
    downloadBtn.onclick = function(){
        console.log("button clicked")
        downloadBtn.innerText = "Downloading file..."
        chrome.tabs.query({
            'active':true, 
            'lastFocusedWindow': true
        },
        (tabs) => {
           var url = tabs[0].url
            var message = {
                'url': url,
                'quality':quality.value,
                'filename': filename.value,
                'format' : format.value
            };
            chrome.runtime.sendMessage(message);
        })
    }
}