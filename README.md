# LondonSquaredMap

Getting to grips with graphics in D3 using [London Squared](http://eoinkilbride.com/prototype/londonSquared.html) Map originally designed by Eoin Kilbride, with some modifications here and there.

<img src="https://github.com/alex-drake/LondonSquaredMap/blob/master/data/pagePreview.png?raw=true" width="750">

The main change is to modify how the script pulls in the data and this is now done in the first instance to be delievered to functions as required (previously it was imported each time the user made a change). This makes use of the `queue()` function (now included in the main d3.v5.js) and `defer()` to hold the initial page alterations until the data import is complete.  

I have used `d3.transition()` to add animations to changes in the input data (ie when the user changes the measured KPI in this example) and allow the user to query each London Borough to get a time line for each KPI. 

I have followed the line chart example from a tutorial by [Mike Foster and Eric Huntley](http://duspviz.mit.edu/d3-workshop/transitions-animation/) and supplemented it with an area chart in the style of charts found in Hans Rosling's excellent book, [Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think](https://www.amazon.co.uk/Factfulness-Reasons-Wrong-Things-Better/dp/1473637465).

Check out the resulting page here: [https://alex-drake.github.io/LondonSquaredMap/](https://alex-drake.github.io/LondonSquaredMap/)
