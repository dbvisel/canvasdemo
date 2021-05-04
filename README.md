# canvas demo

Demo done in React to demonstrate how a JSON data format could be used to present "walks" of embedded items/sections of items from the Internet Archive, interleaved, if desired, with comments. This is done in React because that was an easy way to get a demo off the ground; it could be made in anything.

This uses the JSON data stored in `/src/assets/walkData.js` to build a walk (or walks) based on what's in that data. A demo deployment of this can be seen at https://collagewalk.netlify.app.

To run this locally, _npm install_, then _npm start_.

## REMEMBER/REFERENCE

Embedding on Internet Archive: https://archive.org/help/video.php

## ISSUES

* Throbbers aren't wonderful.
* Canvas size: width right now is 2000px, though it should be changed dynamically (greatest stop's X plus that stop's width plus inner margin)
* Dragging isn't wonderful & I suspect there's something buggy in my implementation of it.

## TODO/FEATURES TO CONSIDER:

* when a stop is selected, auto-center the canvas?
* when a stop is selected/double-clicked, go to present mode?
* arrow keys for moving through present mode
* smarter default placement on canvas – avoid overlap
* maybe different visualizations?
  * CSS grid
  * graph network
