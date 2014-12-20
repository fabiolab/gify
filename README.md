gify
====

Animated gif generator

Description
===

Gify is an angular web application that allow animated gif creation from several pictures.

It is based on the yahoo! "gitshot" javascript lib (star it on github here : https://github.com/yahoo/gifshot) and use the extra angular directive angular-file-upload.

I created it for my mum (that's true :) : there was no portable application allowing to do this easily. This one is very simple :

- Open the app
- Drag and drop the images in the box
- Press the animate "button"
- That's it !

You may want to play with options : size of generated gif, interval, text with custom color, ... All this is also possible in the advanced mode.

Defects
===
- It's not a standalone app
The gifshot lib can't get images from the local disk and can only generate gif from distant images. For this reason, Gify puts the given images to a server via a php script, and make them accessible from another php script.
It's much more complicated but it works ... (and my mum is happy !)

- It only supports modern browsers
Drag and drop, upload file, ... are based on HTML5.

Installation
===
- Clone the repo ;
- Put it to a http server ;
- Make the img directory writable for the users ;
- Modify the conf.ini file to make the path match to the "img" one ;
- Modify the host constant in the js/gify.js file : it must point to your http server.

Use
===
- Open the app
- Drag and drop the images in the box
- Press the animate "button"
- That's it !

You may want to play with options : size of generated gif, interval, text with custom color, ... All this is also possible in the advanced mode.

Screenshots
===
![Main app](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot01.png)
*Main app*
![Uploading a dropped image](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot04.png)
*Uploading a dropped image*
![Image uploaded, button ready](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot06.png)
*Image uploaded, button ready*
![Ready for animate](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot07.png)
*Ready for animate*
![Options](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot08.png)
*Options*
![Done !](https://github.com/fabiolab/gify/blob/master/screenshots/screenshot09.png)
*Done !*
