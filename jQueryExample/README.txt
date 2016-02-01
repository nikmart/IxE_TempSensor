A Pen created at CodePen.io. You can find this one at http://codepen.io/anon/pen/mVjOgE.

 The initial idea was to manipulate the appearance of the slider with labels, kinda like what people have done with :checked selectors and checkboxes.

Unfortunately there is no selector to read the elem.value(hence the js), nor the labels for the range inputs register the mouseevents to their respective inputs.(hence the visible slider) 

(Edit: thanks to Jens I was able to come up with a solution, it's a bit hacky but does the job. The slider is still there, on the gauge, yet barely visible. Hiding the slider or it's knob completely in any way prevents the input from working, hence the need for a hack)

Gauge itself is pretty simple, a container with overflow:hidden, one semi-circle for a background, a copy of that in another color, rotated -x degrees from the center for the fill, and a white masking circle to place the current value.
 
Other than that, another cool trick here is the usage pseudo elements to get the min/max value and put them on the gauge.(doesn't work on ff.)

It also sports a kick-ass for loop written in less, which translates the given values to the corresponding angle. [Update: for loop now accepts up to three colors and calculates the color values for each step.]

Ended up removing animations, made it clunky and caused nasty redraws.


Forked from [Ege Görgülü](http://codepen.io/bamf/)'s Pen [CSS3/HTML5 Gauge-Slider with Minimal JS](http://codepen.io/bamf/pen/gqzcI/).