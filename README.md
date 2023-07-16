<h1>Now Obsolete!</h1>
It appears Google has reversed the stupid decision to swap the location of the 'Create Filter' and 'Search' buttons. Meaning this repository no longer serves any real purpose other than for maybe an academic one. If enabled as an extension this will not swap them to the wrong order, it will just do nothing because it had a check to see if the order was dumb before fixing it. I'll leave it up incase something similar happens in the future.
<h1>Gmail Advanced Search Fix</h1>
Have you recently discovered that Google has swapped the location of the 'Create Filter' and 'Search' buttons in Gmail's Advanced Search? Is your muscle memory making you hit 'Create Filter'? Does pressing enter after typing in your search arguments no longer do what you want it to?
<h2>Try this!</h2>
Just follow the steps to add an unpacked chrome extension in developer mode and enable it. All it does is sets up a listener for when the Advanced Search pane opens and swaps those buttons back to the way that actually makes sense.
<h3>Disclaimer:</h3>
I'm a desktop C# developer so my knowledge of HTML DOM is limited and I can't guarantee I took the best approach, but the source is simple enough to modify if you wish. It finds the buttons using their text content, so it won't work for buttons in other languages. I also don't want to publish it to the Chrome Web Store and pay Google's $5 application fee out of principle.
