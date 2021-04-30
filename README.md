# canvas demo

Demo done in React to demonstrate how a JSON data format could be used to present "walks" of embedded items/sections of items from the Internet Archive, interleaved, if desired, with comments. This uses the JSON data stored in `/src/assets/walkData.js` to build a walk (or walks) based on what's in that data. Demo deployment of this can be seen at https://collagewalk.netlify.app.

## REMEMBER

Embedding on Internet Archive: https://archive.org/help/video.php

## ISSUES

* switching between walks is slow – but that seems like that's an iframe-specific issue?

## TODO:

* deal with different kinds of embedded docs
  * audio
  * books
  * text?
* smarter placement on canvas
  * make canvas as big as it needs to be? does this problem go away if we use percentages?
* maybe different visualizations?
  * add dragging?
  * CSS grid
  * graph network
  * present mode