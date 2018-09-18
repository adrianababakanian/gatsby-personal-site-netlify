---
title: "Mo"
date: "2018-09-12T17:12:33.962Z"
featuredImage: ./assets/mo.png
tags: ["prototyping"]
---

As both an engineer and designer, prototyping for me is one of the most rewarding forms of art. In spring 2017, I took a course at Berkeley's
<a href="http://jacobsinstitute.berkeley.edu/our-space/" target="_blank" class="atomic">Jacobs Institute for Design Innovation</a>
on prototyping and fabrication. My final project entailed designing, engineering, building, and programing a Bluetooth-controlled robot vehicle from scratch with the ultimate goal of navigating hands-free through a msystery obstacle course. I named the robot Mo &mdash; he's an agile tread chassis-based robot with some snazzy direction-based colored pixel animations!

<video width="100%" height="100%" autoplay loop muted>
  <source src="./assets/spin.m4v">
  Your browser does not support the video tag.
</video>


## Technologies
I worked with the
<a href="https://www.arduino.cc/en/Main/Software" target="_blank" class="atomic">Arduino IDE</a>,
<a href="https://store.arduino.cc/usa/arduino-uno-rev3" target="_blank" class="atomic">Arduino Uno</a> microcontrollers,
<a href="https://www.adafruit.com/product/2479" target="_blank" class="atomic">Adafruit Bluefruit</a> modules,
<a href="https://www.adafruit.com/product/1463" target="_blank" class="atomic">neopixels</a>, and other electronics to motorize and control a chassis-based constructed from scratch using 3D modeling, laser cutting, and other prototyping equipment.

Since I created Mo completely from scratch, I designed, engineered, and printed all non-electronic parts of Mo in [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/overview?mktvar002=724861&mkwid=sOICwxb1H|pcrid|226118724187|pkw|autodesk%20fusion%20360|pmt|e|pdv|c|slid||pgrid|52893102612|ptaid|kwd-488376946792|&intent=&utm_medium=cpc&utm_source=google&utm_campaign=GGL_FUSION360_US_BR_SEM_EXACT%3EBrand&utm_term=autodesk%20fusion%20360&utm_content=sOICwxb1H|pcrid|226118724187|pkw|autodesk%20fusion%20360|pmt|e|pdv|c|slid||pgrid|52893102612|ptaid|kwd-488376946792|&gclid=EAIaIQobChMIi-bkpeu02AIVFNVkCh3JOA2pEAAYASAAEgK8bfD_BwE&dclid=CN7KiajrtNgCFUv0ZAodRJMORg) &mdash; a 3D CAD program that allows for designing, engineering, and simulating.

I went through many iterations of designing in order to get the chassis of the robot just right. Factors to consider included properly designating internal space for the electronics, engineering the motor compartments and accompanying fasteners, and designing for the inclusion of magnets to solidfy the encasing structure while also allowing for easy access to the internal electronics.

Below are some different views of the Fusion file I created for Mo's chassis.

The finalized, full-poly version of the chassis and hinged door took almost 12 hours to print on the
<a href="https://ultimaker.com/en/products/ultimaker-2-plus" target="_blank" class="atomic">Ultimaker 2+</a>, a wonderful and user-friendly 3D printer. All of my tweaking, precise measuring, and iterating paid off when I ended up with the compact and flush chassis shown below.

![Open chassis](./assets/open.png)

![Closed chassis](./assets/closed.png)

Since one of the main challeneges in the final exam obstacle course was a steeply-inclined ramp that needed to be both ascended and descended, I decided to engineer Mo as a tread-based robot in order to be able to face the challenge of simultaneously having the capacity to ascend surely and descend without slipping. I 3D-printed dozens of treads that I hooked together using fine metal rods, which ultimately encased two laser-cut acrylic faces that enclosed the three gears composing the triangular-shaped tread hold.

Designing the files to be sent to the laser-cutter required just as many iterations as did the 3D chassis files. I made 2D laser cut files in Illustrator with appropriately placed and sized holes for gears I 3D printed to match with the tread cable. Once everything was cut and printed, I sandwiched the gears between the acrylic walls and held everything together with nuts and bolts and appropriate spacers. This made for an easy way to fit the cable tread over the gears while allowing for future iterations.

I designed the lead gears to attach to the motors that nested in Mo's chassis, so the treads were firmly connected to the chassis body while also being easily adjustable as shown below.

![Treads on](./assets/on.png)

![Treads off](./assets/off.png)

 One of my goals throughout the process of constructing the robot was to make all of the parts structurally reliable while allowing for flexibility. As such, I compartamentalized Mo's design in order to allow for an easy take-apart process to facilitate debugging, electronic access, updates, and maintenance. In addition to the treads being easily removed from the chassis body, and the treads being easily deconstructed, I also engineered a flushed mangentized door that enabled a quick take-apart process with very little structural interference.

 As a result, Mo has a sturdy decomposability.

 <video width="100%" height="100%" autoplay loop muted>
   <source src="./assets/demo.m4v">
   Your browser does not support the video tag.
 </video>

 Mo is controllable completely via Bluetooth thanks to an <a href="https://www.adafruit.com/product/2479" target="_blank" class="atomic">Adafruit Bluefruit</a> module that I programmed into Mo's circuit board. I coded the controls into an app for both iOS and Android devices.

 <video width="100%" height="100%" autoplay loop muted>
   <source src="./assets/go.m4v">
   Your browser does not support the video tag.
 </video>

 After programming Mo's controls, I decided to add a ring of <a href="https://www.adafruit.com/product/1463" target="_blank" class="atomic">neopixels</a> to each of Mo's tread wheels that make chasing patterns to correspond with different actions. All of Mo's code was written in the <a href="https://www.arduino.cc/en/Main/Software" target="_blank" class="atomic">Arduino IDE</a> &mdash; you can find
 <a href="https://github.com/adrianababakanian/mo_code" target="_blank" class="atomic">my code for the project</a> on GitHub.

 ![Neopixel rings](./assets/neo.png)

 ![Glowing neopixels](./assets/glow_2.png)

 Special thanks to the team and resources at the
 <a href="https://invent.citris-uc.org/" target="_blank" class="atomic">CITRIS Invention Lab</a> for the support and assistance that made this project possible, and for giving me a lab to call home for the semester!
