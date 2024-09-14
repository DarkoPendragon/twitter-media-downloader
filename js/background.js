chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
        const req = new XMLHttpRequest()
        let url = tabs[0].url
        if (!url.includes("/x.com/") || !url.includes("/twitter.com/") && !url.includes("/status/")) return console.log("non-status url")
        req.open("GET", url.replace(/x\.com|twitter\.com/g, 'api.vxtwitter.com'), true)
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        req.send()

        req.onload = () => {
            if (req.status === 200) { // data.mediaURLs
                let data = JSON.parse(req.response)
                let urls = data.mediaURLs
                if (!urls || urls.length == 0) return console.log('no media urls')
                for (var i = urls.length - 1; i >= 0; i--) {
                    chrome.downloads.download({ url: urls[i], filename: urls[i].split('/').pop() })
                }
            }
        }
    })
})