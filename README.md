# canvas demo

Demo done in React to demonstrate how a JSON data format could be used to present "walks" of embedded items/sections of items from the Internet Archive, interleaved, if desired, with comments. This is done in React because that was an easy way to get a demo off the ground; it could be made in anything.

This uses the JSON data stored in `/src/assets/walkData.js` to build a walk (or walks) based on what's in that data – that includes some basic documentation of the format. A demo deployment of this can be seen at https://collagewalk.netlify.app.

To run this locally, _npm install_, then _npm start_. Build with _npm run build_.

## ISSUES

 - Throbbers aren't wonderful.
 - Canvas size: width right now is 2000px, though it should be changed dynamically (greatest stop's X plus that stop's width plus inner margin)
 - Dragging isn't wonderful & I suspect there's something buggy in my implementation of it.

## DEMO NEEDS

 - This is fake content and not actually compelling! 

## TODO/FEATURES TO CONSIDER:

 - when a stop is selected, auto-center the canvas?
 - when a stop is selected/double-clicked, go to present mode?
 - arrow keys for moving through present mode
 - comments could be richtext/markdown?
 - could add rotation/colors/CSS styles to stops
 - smarter default placement on canvas – avoid overlap
 - Internet Archive URL scheme: right now this is just taking the embed link and not processing that in any way. We could turn, for example, "1up" or "2up" in the book reader into a separate parameter.
 - maybe different visualizations?
   - CSS grid
   - graph network with arrows

## REMEMBER/REFERENCE

 * Embedding on Internet Archive: https://archive.org/help/video.php