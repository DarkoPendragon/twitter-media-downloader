# Twitter (X) Video/Image Downloader
This is a very simple Chromium extension I made in probably 5 minutes. It lets you download media from a post you're current on by clicking the extensions icon.  
This is the extension version of my video downloader at (pretty much the same process): https://www.pendragons-den.com/x-video.

# How Do
This extension is unpacked (I'm not paying Google to upload it), so you'll have to install it manually. It's fairly straight forward though.

1. Download the source code somewhere (Code button above)
2. Extract the .zip file you get from GitHub
3. In your browser, go to `chrome://extensions` (type/paste this in your seach bar, even if you don't use chrome)
4. Enable "Developer Mode," there should be a checkbox/radio button somewhere on the top to do this
5. There should now be a "Load unpacked" button somewhere on top as well, click this
6. Navigate to where you extracted the code before (where the `manifest.json` file is)
7. Select this folder, then enable the extension if it isn't already

Now, while on a tweet (I will not call it an X post) you can click the extension icon to download all media on the tweet. It may take a second to run, do not spam the button.

# How does it do this?
Unlike other extensions that need access to the Twitter website itself or something else that can easily steal your info/data mine, all this does is grab the current tabs URL and feed it to `api.vxtwitter.com`. It then tells your browser to download each link that vxtwitter finds. You can see this for yourself in [/js/background.js](https://github.com/DarkoPendragon/twitter-media-downloader/blob/master/js/background.js). It also doesn't require access to anything besides your tabs. And, again, you can see everything this is doing unlike every other God forsaken extension on the Chrome store.

# What works with this?
Any Chromium browser. I personally use Brave (and you should too). But Chrome itself will work fine, or a browser like Opera. As long as its Chromium based. A browser like Firefox will not work.  
https://alternativeto.net/category/browsers/chromium-based/